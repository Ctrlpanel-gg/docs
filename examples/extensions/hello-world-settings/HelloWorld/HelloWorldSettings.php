<?php

namespace App\Extensions\Tools\HelloWorld;

use Spatie\LaravelSettings\Settings;

class HelloWorldSettings extends Settings
{
    public bool $enabled;
    public string $message;

    public static function group(): string
    {
        return 'hello_world';
    }

    public static function getOptionInputData(): array
    {
        return [
            'category_icon' => 'fas fa-puzzle-piece',
            'enabled' => [
                'type' => 'boolean',
                'label' => 'Enabled',
                'description' => 'Allow the Hello World endpoint.',
            ],
            'message' => [
                'type' => 'string',
                'label' => 'Message',
                'description' => 'Text returned by the extension.',
            ],
        ];
    }
}
