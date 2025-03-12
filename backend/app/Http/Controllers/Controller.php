<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

abstract class Controller extends BaseController
{
    //
}

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct()
    {
        // Aplicar el middleware 'auth' a todas las acciones del controlador
        $this->middleware('auth');
    }

    public function index()
    {
        return view('dashboard');
    }
}