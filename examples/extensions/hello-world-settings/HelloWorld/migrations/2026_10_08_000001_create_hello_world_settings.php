<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class CreateHelloWorldSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('hello_world.enabled', false);
        $this->migrator->add('hello_world.message', 'Hello from CtrlPanel');
    }

    public function down(): void
    {
        $this->migrator->delete('hello_world.enabled');
        $this->migrator->delete('hello_world.message');
    }
}
