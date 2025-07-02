<?php

use Illuminate\Support\Facades\Route;

Route::get('/csrf-token', fn() => csrf_token());
Route::get('/{path}', fn() => view('index'))->where('path', '.*');
