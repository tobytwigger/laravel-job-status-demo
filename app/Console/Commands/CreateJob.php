<?php

namespace App\Console\Commands;

use App\Jobs\BaseJob;
use App\Jobs\MyFirstJob;
use App\Jobs\MySecondJob;
use App\Jobs\MyThirdJob;
use App\Jobs\SendEmailToUser;
use App\Jobs\CreateReport;
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
                            {--sleep= : Sleep the job for the given number of seconds when running}
                            {--count=1 : The number of jobs to create.}';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public const CLASS_LOOKUP = [
        'email' => SendEmailToUser::class,
        'report' => CreateReport::class,
        'one' => MyFirstJob::class,
        'two' => MySecondJob::class,
        'three' => MyThirdJob::class
    ];

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $job = self::CLASS_LOOKUP[$this->option('job')];
        $tags = $this->getTags();

        $generateJob = fn() => in_array(BaseJob::class, class_parents($job)) ? new $job(
            tags: $tags,
            fail: $this->option('fail'),
            sleep: $this->option('sleep'),
            cancel: $this->option('cancel'),
            messages: $this->option('messages')
        ) : new $job(sleep: $this->option('sleep'));
        for($i = 0; $i<$this->option('count'); $i++) {
            $dispatch = dispatch($generateJob());
        }

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
