<?php

use App\Extensions\Tools\HelloWorld\HelloWorldController;
use Illuminate\Support\Facades\Route;

Route::middleware(['web', 'auth', 'checkSuspended'])
    ->prefix('extensions/hello-world')
    ->name('extensions.hello-world.')
    ->group(function (): void {
        Route::get('/', [HelloWorldController::class, 'index'])
            ->name('index');
    });
