<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PeerGroupController;
use App\Http\Controllers\SurveyController;
use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/logout', [AuthController::class, 'logout']);

Route::get('/peer-groups', [PeerGroupController::class, 'index'])->name('peer_groups.index');

Route::post('/peer-groups', [PeerGroupController::class, 'store'])->name('peer_groups.store');

Route::get('/peer-groups/{peerGroup}', [PeerGroupController::class, 'show'])->name('peer_groups.show');

Route::put('/peer-groups/{peerGroup}', [PeerGroupController::class, 'update'])->name('peer_groups.update');

Route::delete('/peer-groups/{peerGroup}', [PeerGroupController::class, 'destroy'])->name('peer_groups.destroy');

Route::get('/surveys', [SurveyController::class, 'index'])->name('surveys.index');

Route::post('/surveys', [SurveyController::class, 'store'])->name('surveys.store');

Route::get('/surveys/{survey}', [SurveyController::class, 'show'])->name('surveys.show');

Route::put('/surveys/{survey}', [SurveyController::class, 'update'])->name('surveys.update');

Route::delete('/surveys/{survey}', [SurveyController::class, 'destroy'])->name('surveys.destroy');

Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');

Route::post('/categories', [CategoryController::class, 'store'])->name('categories.store');

Route::get('/categories/{category}', [CategoryController::class, 'show'])->name('categories.show');

Route::put('/categories/{category}', [CategoryController::class, 'update'])->name('categories.update');

Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])->name('categories.destroy');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
