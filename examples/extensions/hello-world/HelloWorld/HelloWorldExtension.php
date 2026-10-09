<?php

namespace App\Extensions\Tools\HelloWorld;

use App\Classes\AbstractExtension;

class HelloWorldExtension extends AbstractExtension
{
    public static function getConfig(): array
    {
        return ['name' => 'Hello World'];
    }
}
