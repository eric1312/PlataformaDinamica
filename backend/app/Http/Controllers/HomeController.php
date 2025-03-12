<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function dashboard()
    {
        // Lógica para mostrar el dashboard
        return view('dashboard');
    }
}