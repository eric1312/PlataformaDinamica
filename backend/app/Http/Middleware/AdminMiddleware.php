<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check() && Auth::user()->isAdmin()) {
            if (\Auth::check() && \Auth::user()->isAdmin()) {
                return $next($request);
            }

            // Responder con un mensaje de acceso denegado
            return response()->json(['message' => 'Acceso denegado'], 403);
        }      
    }
};