<?php

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

Route::get('/peer-groups', 'PeerGroupController@all')->name('peer_groups.all');

Route::post('/peer-groups', 'PeerGroupController@store')->name('peer_groups.store');

Route::get('/peer-groups/{peerGroup}', 'PeerGroupController@show')->name('peer_groups.show');

Route::put('/peer-groups/{peerGroup}', 'PeerGroupController@update')->name('peer_groups.update');

Route::delete('/peer-groups/{peerGroup}', 'PeerGroupController@destory')->name('peer_groups.destroy');

Route::get('/surveys', 'SurveyController@all')->name('surveys.all');

Route::post('/surveys', 'SurveyController@store')->name('surveys.store');

Route::get('/surveys/{survey}', 'SurveyController@show')->name('surveys.show');

Route::put('/surveys/{survey}', 'SurveyController@update')->name('surveys.update');

Route::delete('/surveys/{survey}', 'SurveyController@destory')->name('surveys.destroy');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
