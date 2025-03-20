<?php

namespace App\Http;

class Kernel extends \Illuminate\Foundation\Http\Kernel
{
    protected $routeMiddleware = [
        // Otros middlewares...
        'admin' => \App\Http\Middleware\AdminMiddleware::class,
    ];
}
