<?php

namespace App\Extensions\Tools\HelloWorld;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class HelloWorldController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'message' => 'Hello from the CtrlPanel extension',
        ]);
    }
}
