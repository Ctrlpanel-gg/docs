# HelloWorld example for CtrlPanel 1.2.0

Authored tutorial code checked against the tagged panel source. PHP syntax is validated; a live panel/database integration is not claimed.

Copy the HelloWorld directory into app/Extensions/Tools/ in an isolated staging panel. This leaves the namespace/class/directory conventions intact. Run composer dump-autoload and php artisan route:clear, then inspect php artisan route:list --path=extensions/hello-world. Sign in and visit /extensions/hello-world. Guest access should redirect to login.

For the settings-enabled variant, also clear configuration/discovery caches, run the panel migration procedure in staging, clear settings cache, and enable HelloWorld in admin settings. The endpoint is deliberately unavailable until enabled. Admin settings access must have settings.helloworld.read/write (or the existing appropriate wildcard permission). Register explicit addon permissions in config/permissions_web.php if using the standard permission seeder.

Do not deploy blindly to production. Review middleware, naming conflicts, caches, and deployment ownership for your environment. No addon lifecycle/uninstall callback is provided by the inspected extension loader.
