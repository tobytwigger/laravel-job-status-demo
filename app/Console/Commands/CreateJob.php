<?php

namespace App\Console\Commands;

use App\Jobs\JobOne;
use App\Jobs\JobTwo;
use Illuminate\Console\Command;

class CreateJob extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'job:create
                            {--job= : The class of the job to show}
                            {--fail : If the job should fail}
                            {--cancel : If the job should be cancelled}
                            {--messages : If the job should give message feedback}
                            {--tag=* : Any tags to filter by. Separate the key and the value with a colon.}
                            {--delay= : Delay the job by the given amount}
                            {--sleep= : Sleep the job for the given number of seconds when running}';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    private array $lookup = [
        'email' => JobOne::class,
        'report' => JobTwo::class
    ];

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $job = $this->lookup[$this->option('job')];
        $tags = $this->getTags();

        $dispatch = dispatch(
            new $job(
                tags: $tags,
                fail: $this->option('fail'),
                sleep: $this->option('sleep'),
                cancel: $this->option('cancel'),
                messages: $this->option('messages')
            )
        );

        if($this->option('delay')) {
            $dispatch->delay($this->option('delay'));
        }

        return Command::SUCCESS;
    }


    public function getTags()
    {
        if($this->hasTags()) {
            $tags = [];
            foreach($this->option('tag') as $tagString) {
                $tagData = explode(':', $tagString);
                $tags[$tagData[0]] = $tagData[1];
            }
            return $tags;
        }
        return [];
    }

    public function hasTags(): bool
    {
        return $this->option('tag') && count($this->option('tag')) > 0;
    }
}
