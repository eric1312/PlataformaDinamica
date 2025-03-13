<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\System;

class AdminController extends Controller
{
    // Obtener todos los usuarios
    public function getUsers()
    {
        $users = User::all();
        return response()->json(['users' => $users]);
    }

    // Obtener todos los sistemas
    public function getSystems()
    {
        $systems = System::all();
        return response()->json(['systems' => $systems]);
    }

    // Asignar un sistema a un usuario
    public function assignSystemToUser(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'system_id' => 'required|exists:systems,id',
        ]);

        $user = User::find($request->user_id);
        $system = System::find($request->system_id);

        // Asignar el sistema al usuario (asumiendo una relación muchos a muchos)
        $user->systems()->syncWithoutDetaching([$system->id]);

        return response()->json(['message' => 'Sistema asignado correctamente']);
    }

    // Remover un sistema de un usuario
    public function removeSystemFromUser(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'system_id' => 'required|exists:systems,id',
        ]);

        $user = User::find($request->user_id);
        $system = System::find($request->system_id);

        // Remover el sistema del usuario
        $user->systems()->detach($system->id);

        return response()->json(['message' => 'Sistema removido correctamente']);
    }
}