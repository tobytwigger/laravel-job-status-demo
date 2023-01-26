<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendEmailToUser extends BaseJob
{

    public function alias(): string
    {
        return 'send-email';
    }

    public function generateMessage(int $steps, int $iterator)
    {
        return [
            0 => 'Creating attachments',
            4 => 'Crafting message',
            8 => 'Analysing data',
            12 => 'Optimising the email layout',
            16 => 'Sending email',
            20 => 'Marking read receipts'
        ][$iterator];
    }

    public function finalMessage(): string
    {
        return 'Email sent successfully';
    }

    public function exceptions(?\Exception $baseException): array
    {
        return [
            new \Exception('The users mail server could not be found.', previous: $baseException),
            new \Exception('You have ran out of emails to send today. Please wait a few hours.', previous: $baseException)
        ];
    }

}
