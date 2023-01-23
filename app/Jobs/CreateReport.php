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

    public function alias(): string
    {
        return 'create-report';
    }

    public function generateMessage(int $steps, int $iterator)
    {
        return sprintf('Step %u of %u in creating a report', $iterator + 1, $steps);
    }
}
