<?php

use App\Http\Controllers\API\V1\Forecast\ForecastApiController;
use App\Http\Controllers\API\V1\Forecast\ForecastController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {
    Route::get('/forecast/api', ForecastApiController::class);
    Route::get('/forecast', [ForecastController::class, 'index']);
    Route::post('/forecast', [ForecastController::class, 'store']);
});