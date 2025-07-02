<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth_token')->group(function () {
    Route::get('/user', [AuthController::class, 'fetch']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
