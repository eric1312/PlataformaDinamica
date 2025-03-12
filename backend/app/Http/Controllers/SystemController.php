<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SystemController extends Controller
{
    // Método para obtener los sistemas asignados al usuario autenticado
    public function getUserSystems()
    {
        // Obtener el usuario autenticado
        $user = Auth::user();

        // Verificar si el usuario está autenticado
        if (!$user) {
            return response()->json(['error' => 'No autenticado'], 401);
        }

        // Obtener los sistemas asignados al usuario (asumiendo una relación en el modelo User)
        $systems = $user->systems;

        // Devolver los sistemas en formato JSON
        return response()->json(['systems' => $systems]);
    }
}