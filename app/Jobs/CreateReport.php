<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CreateReport extends BaseJob
{

    public function __construct(array $tags, bool $fail = false, ?int $sleep = null, bool $messages = false, bool $cancel = false)
    {
        parent::__construct($tags, $fail, $sleep, $messages, $cancel);
        $this->onQueue('report-queue');
    }

    public function alias(): string
    {
        return 'create-report';
    }


    public function generateMessage(int $steps, int $iterator)
    {
        return [
            0 => 'Gathering together data',
            4 => 'Filtering data to the selected timeframe',
            8 => 'Analysing data',
            12 => 'Saving graphs',
            16 => 'Generating report layout',
            20 => 'Saving report'
        ][$iterator];
    }

    public function finalMessage(): string
    {
        return 'Report created successfully';
    }

    public function exceptions(?\Exception $baseException): array
    {
        return [
            new \Exception('Could not find the right data for the report.', previous: $baseException),
            new \Exception('File storage full, could not save report.', previous: $baseException)
        ];
    }

}
