<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration {
    /**
     * Run the migrations.
     *
     */
    public function up()
    {
        Schema::create(sprintf('%s_%s', config('laravel-job-status.table_prefix'), 'job_status_users'), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('job_status_id');
            $table->timestamps();
        });

        Schema::table(sprintf('%s_%s', config('laravel-job-status.table_prefix'), 'job_status_users'), function (Blueprint $table) {
            $table->foreign('job_status_id')->references('id')->on(sprintf('%s_%s', config('laravel-job-status.table_prefix'), 'job_statuses'))->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     */
    public function down()
    {
        Schema::dropIfExists(sprintf('%s_%s', config('laravel-job-status.table_prefix'), 'job_status_users'));
    }
};
