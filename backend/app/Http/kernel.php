<?php

namespace App\Http;

class Kernel extends \Illuminate\Foundation\Http\Kernel
{
    protected $routeMiddleware = [
        // Otros middlewares
        'admin' => \App\Http\Middleware\EnsureUserIsAdmin::class,
    ];
}
