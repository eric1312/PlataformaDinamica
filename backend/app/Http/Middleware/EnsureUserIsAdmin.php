<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next)
    {
        // Verificar si el usuario está autenticado y es un administrador
        if (Auth::check() && Auth::user()->is_admin) {
            return $next($request);
        }

        // Redirigir si no es un administrador
        return redirect('/')->with('error', 'No tienes permisos para acceder a esta página.');
    }
}