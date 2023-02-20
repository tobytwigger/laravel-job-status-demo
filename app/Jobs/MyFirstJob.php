<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\RateLimited;
use Illuminate\Queue\SerializesModels;

class MyFirstJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $maxExceptions = 55;

    public function retryUntil()
    {
        return now()->addMinutes(5);
    }

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(private ?float $sleep = null)
    {
        //
    }

    public function middleware()
    {
        return [
            new RateLimited('backups')
        ];
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if(isset($this->sleep) && $this->sleep) {
            usleep($this->sleep * 1000000);
        }
        throw new \Exception('test');
    }
}
