<?php

namespace App\Http\Controllers;

use App\Console\Commands\CreateJob;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class CreateRandomJobsController extends Controller
{

    public function __invoke(Request $request)
    {
        $request->validate([
            'quantity' => 'sometimes|numeric',
            'batch' => 'sometimes|boolean',
            'only_fail_last' => 'sometimes|boolean',
            'succeed_all' => 'sometimes|boolean'
        ]);

        $jobs = [];
        for ($i = 0; $i < (int)$request->input('quantity'); $i++) {
            $jobType = Arr::random(['email', 'report']);
            $job = CreateJob::CLASS_LOOKUP[$jobType];
            if ($jobType === 'email') {
                $tags = ['email' => Arr::random(['toby@example.com', 't@example.com', 'toby@other.com'])];
            } else {
                $tags = ['timescale' => Arr::random(['daily', 'weekly', 'monthly'])];
            }

            $jobs[] = new $job(
                tags: $tags,
                fail: $request->input('succeed_all')
                    ? false
                    : ($request->input('only_fail_last')
                        ? $i === (((int)$request->input('quantity')) - 1) ? true : false
                        : Arr::random([true, false, false, false])
                    ),
                sleep: Arr::random([1, 2, 3]),
                cancel: $request->input('succeed_all')
                    ? false
                    : Arr::random([true, false, false, false]),
                messages: Arr::random([true, false])
            );


        }

        if ($request->input('batch')) {
            Bus::batch($jobs)->name('My auto-generated batch')->dispatch();
        } else {
            foreach ($jobs as $job) {
                dispatch($job)
                    ->delay(Arr::random([3, 4, 5, 6]));
            }
        }

        return redirect()->to('/');
    }
}
