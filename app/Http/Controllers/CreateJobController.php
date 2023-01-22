<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Validation\Rule;

class CreateJobController extends Controller
{

    public function __invoke(Request $request)
    {
        $request->validate([
            'delay' => 'sometimes|nullable|numeric',
            'sleep' => 'sometimes|nullable|numeric',
            'job' => ['required', 'string', Rule::in(['email', 'report'])],
            'fail' => 'sometimes',
            'cancel' => 'sometimes',
            'messages' => 'sometimes',
            'tag' => 'sometimes|array',
            'tag.*.value' => 'required|string',
            'tag.*.key' => 'required|string'
        ]);

        $command = sprintf('job:create --job=%s', $request->input('job'));
        if($request->input('fail')) {
            $command .= ' --fail';
        }
        if($request->input('cancel')) {
            $command .= ' --cancel';
        }
        if($request->input('messages')) {
            $command .= ' --messages';
        }
        if($request->has('sleep') && $request->input('sleep')) {
            $command .= ' --sleep=' . $request->input('sleep');
        }
        if($request->has('delay') && $request->input('delay')) {
            $command .= ' --delay=' . $request->input('delay');
        }
        foreach($request->input('tag', []) as $tag) {
            $command .= sprintf(' --tag=%s:%s', $tag['value'], $tag['key']);
        }

        Artisan::call($command);

        return redirect()->to('/');
    }
}
