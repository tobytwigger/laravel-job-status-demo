<!DOCTYPE html>
<html lang=en>
<head><title>dashboard</title>
    <meta charset=utf-8>
    <meta name=viewport content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name=csrf-token content="{{ csrf_token() }}">
    <title>Title</title>
    <meta charset=utf-8>
    <meta name=description content="A Quasar Project">
    <meta name=format-detection content="telephone=no">
    <meta name=msapplication-tap-highlight content=no>
    <meta name=viewport content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width">
    <link rel=icon type=image/png sizes=128x128 href="/vendor/dashboard/icons/favicon-128x128.png">
    <link rel=icon type=image/png sizes=96x96 href="/vendor/dashboard/icons/favicon-96x96.png">
    <link rel=icon type=image/png sizes=32x32 href="/vendor/dashboard/icons/favicon-32x32.png">
    <link rel=icon type=image/png sizes=16x16 href="/vendor/dashboard/icons/favicon-16x16.png">
    <link rel=icon type=image/ico href="/vendor/dashboard/favicon.ico">
    <script type="module" crossorigin src="/vendor/dashboard/assets/index.ac27f6e1.js"></script>
    <link rel="stylesheet" href="/vendor/dashboard/assets/index.b2f2ffe3.css">
</head>
<body>
<div id=q-app></div>
</body>
<script>window.JobStatus = {{json_encode($jobStatusVariables)}}</script>
</html>
