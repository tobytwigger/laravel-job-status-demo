<?php

namespace App\Http\Controllers;

use App\Console\Commands\CreateJob;
use App\Jobs\BaseJob;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\Rule;

class CreateJobController extends Controller
{

    public function __invoke(Request $request)
    {
        $request->validate([
            'delay' => 'sometimes|nullable|numeric',
            'sleep' => 'sometimes|nullable|numeric',
            'job' => ['required', 'string', Rule::in(array_merge(array_keys(CreateJob::CLASS_LOOKUP), ['random']))],
            'fail' => 'sometimes',
            'cancel' => 'sometimes|boolean',
            'messages' => 'sometimes',
            'tag' => 'sometimes|array',
            'tag.*.value' => 'required|string',
            'tag.*.key' => 'required|string',
            'count' => 'required|numeric|min:1|max:100',
            'batch' => 'sometimes|boolean',
            'batch_name' => 'sometimes|string',
        ]);

        $this->throttle();

        $jobs = [];
        for($i=0;$i<$request->input('count', 1);$i++) {
            $jobClass = CreateJob::CLASS_LOOKUP[$request->input('job')] ?? Arr::random(CreateJob::CLASS_LOOKUP);
            $jobs[] = new $jobClass(
                tags: collect($request->input('tag'))->mapWithKeys(fn($tag) => [$tag['key'] => $tag['value']])->toArray(),
                fail: $request->input('batch')
                    ? $i > ($request->input('count', 1) - 1)
                    : $request->input('fail'),
                sleep: $request->input('sleep'),
                cancel: $request->input('cancel'),
                messages: $request->input('messages')
            );
        }

        if($request->input('batch')) {
            Bus::batch($jobs)
                ->name($request->input('batch_name') ?? 'My Batch')
                ->dispatch();
        } else {
            foreach($jobs as $job) {
                if($request->input('delay')) {
                    $job->delay($request->input('delay'));
                }
                dispatch($job);
            }
        }

        return redirect()->to('/');
    }

}
