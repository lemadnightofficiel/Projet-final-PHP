<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SuperheroController;

Route::apiResource('/users', UserController::class);
Route::apiResource('/superheroes', SuperheroController::class);
