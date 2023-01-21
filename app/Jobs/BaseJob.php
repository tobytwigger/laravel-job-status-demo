<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use JobStatus\Concerns\Trackable;

class BaseJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, Trackable;

    protected array $tags;

    protected bool $fail = false;

    public $tries = 3;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(array $tags, bool $fail = false)
    {
        $this->tags = $tags;
        $this->fail = $fail;
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
        if($this->fail) {
            throw new \Exception('Something went wrong');
        }
    }
}
