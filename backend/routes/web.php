<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingsController; // Importación correcta
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SystemController;


// Rutas de autenticación
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::get('/register', [AuthController::class, 'showRegistrationForm'])->name('register');
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Ruta protegida con el middleware 'auth'
Route::get('/dashboard', [HomeController::class, 'dashboard'])->middleware('auth');

// Grupo de rutas protegidas
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'show']);
    Route::get('/settings', [SettingsController::class, 'index']);
});

// Ruta para obtener los sistemas del usuario autenticado
Route::middleware('auth:sanctum')->get('/user-systems', [SystemController::class, 'getUserSystems']);
