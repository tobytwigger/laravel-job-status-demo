<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use JobStatus\Concerns\Trackable;

abstract class BaseJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, Trackable;

    protected array $tags;

    protected bool $fail = false;

    public $tries = 3;

    public ?int $sleep;
    public bool $messages;
    public bool $cancel;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(array $tags, bool $fail = false, ?int $sleep = null, bool $messages = false, bool $cancel = false)
    {
        $this->tags = $tags;
        $this->fail = $fail;
        $this->sleep = $sleep;
        $this->messages = $messages;
        $this->cancel = $cancel;
    }

    public function tags(): array
    {
        return $this->tags;
    }

    public static function create(array $tags)
    {
        return new static($tags);
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if($this->sleep) {
            $steps = 20;
            $microseconds = $this->sleep * 1000000;
            $pause = $microseconds / $steps;

            for($i = 0; $i <= $steps; $i++) {
                usleep($pause);
                $this->status()->setPercentage(($i/$steps)*100);
                if($this->messages && $i % 4 === 0) {
                    $this->status()->message($this->generateMessage($steps, $i));
                }
            }
        }
        if($this->cancel) {
            $this->status()->cancel();
            $this->checkForSignals();
        }
        if($this->fail) {
            throw new \Exception('Something went wrong');
        }
        if($this->messages) {
            $this->status()->successMessage('Email sent successfully');
        }
    }

    abstract public function generateMessage(int $steps, int $iterator);
}
