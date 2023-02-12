<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create
                            {--name= : Name of the user}
                            {--email= : Email of the user}
                            {--password= : Password for the user}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        User::updateOrCreate([
            'name' => $this->option('name'),
            'email' => $this->option('email'),
        ], [
            'password' => Hash::make($this->option('password')),
        ]);

        return Command::SUCCESS;
    }
}
