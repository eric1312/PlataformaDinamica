<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index()
    {
        // Lógica para mostrar la configuración
        return view('settings');
    }
}
