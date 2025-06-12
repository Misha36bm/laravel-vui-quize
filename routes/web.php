<?php

use Illuminate\Support\Facades\Route;

Route::get('/{path}', fn() => view('index'))->where('path', '.*');
