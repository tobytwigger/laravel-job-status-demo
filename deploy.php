<?php

namespace Deployer;

require 'recipe/laravel.php';
require 'contrib/php-fpm.php';

// Config

set('keep_releases', 3);
set('repository', 'git@github.com:tobytwigger/laravel-job-status-demo');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

host('gpsvault.co.uk')
    ->setSshMultiplexing(true)
    ->set('remote_user', 'ubuntu')
    ->set('branch', 'main')
    ->set('deploy_path', '/var/www/job-status');

// Tasks

task('deploy', [
    'deploy:prepare',
    'deploy:vendors',
    'horizon:publish',
    'job:install',
    'assets:compile',
    'assets:upload',
    'artisan:migrate',
    'permission:install',
    'artisan:storage:link',
    'artisan:cache:clear',
    'artisan:route:cache',
    'artisan:view:cache',
    'artisan:config:cache',
    'artisan:event:cache',
    'artisan:optimize',
    'deploy:publish',
]);

task('horizon:publish', artisan('horizon:publish'));

task('job:install', artisan('job:install'));

task('permission:install', artisan('permission:install'));

task('meilisearch:install', artisan('meilisearch:install'));

task('assets:compile', function () {
    runLocally('npm install');
    runLocally('npm run build');
});

task('assets:upload', function () {
    upload('public/build', '{{release_path}}/public/build');
});

after('deploy:failed', 'deploy:unlock');

// Not currently working, as they don't change their release reference
//after('deploy:success', 'artisan:horizon:terminate');
//after('deploy:success', function() {
//    run('php {{release_path}}/artisan websockets:restart');
//});
after('deploy:success', artisan('horizon:terminate'));
