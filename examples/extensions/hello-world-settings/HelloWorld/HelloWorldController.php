<?php

namespace App\Extensions\Tools\HelloWorld;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class HelloWorldController extends Controller
{
    public function index(): JsonResponse
    {
        $settings = new HelloWorldSettings();
        abort_unless($settings->enabled, 404);

        return response()->json(['message' => $settings->message]);
    }
}
