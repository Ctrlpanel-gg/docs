---
sidebar_position: 3
---
# Additional Configuration

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Running the installer

It is recommended, to run the installer after this big update.
#### Navigate to "https://yourdomain.com/install" to run the Web-Installer and follow the steps.
If you run into problems with the email setup, you can use the skip button and set it up later.

All settings previously specified in your `.env`file, are now editable through the Panel itself on the "Settings"-Tab

Ensure you clear the config cache and restart the queue workers when making changes to the email details.<br/>
`php artisan config:clear` and `php artisan queue:restart`

## Misc Configuration
### Discord Auth
Go to `https://yourdomain.com/admin/settings#misc`

**Setting up Auth**<br/>
[How](http://faq.demostoreprestashop.com/faq.php?fid=133&pid=41) to get CLIENT_ID and CLIENT_SECRET <br />
for the redirect uri you have to use YOUR_WEBSITE_URL + /auth/callback (example: https://bitsec.dev/auth/callback)

**Adding the Discord Bot**<br/>
If you would like to automatically force new users to join your Discord server after they have verified, you will need to set up a Discord bot. This can be an already existing Discord bot in your server.

1. add your Discord bot to your server and give him the appropriate permissions.
2. add your Discord bot token on the webpage.
3. add your Discord server(guild) ID on the webpage.
4. press the "Submit" button.

That's it! The Dashboard can now use your bot to make API calls to Discord to place new users into your Discord server. Your bot will not come online as we only use it to make API calls when someone verifies, you can still use your bot as you normally would :)

**Custom Role Reward**<br/>
If you would like to give your users a custom role automatically when they verify their Discord account, you have to copy the ID of an existing role from your Discord server and place it on the webpage as well.

### ReCAPTCHA v2
Go to `https://yourdomain.com/admin/settings#misc`

ControlPanel uses visible reCAPTCHA to secure the login page from brute-force attacks. If the login attempt is considered suspicious, users may be required to perform a reCAPTCHA challenge.

You can generate your own keys in the [admin console](https://www.google.com/recaptcha/admin/create)

To add your keys you need to add them on the webpage.


### Manual Mail Configuration
To send out notifications and mails, you will need to configure your mail variables correctly.
You can use a free mail server; for example from [mailjet](https://www.mailjet.com/). You can also install your own mail server using, for example, [mailcow](https://mailcow.email/)

Go to `https://yourdomain.com/admin/settings#misc` and enter your mail credentials.

Ensure you clear the config cache and restart the queue workers when making changes to the email details.<br/>
`php artisan config:clear` and `php artisan queue:restart`

To test the mail configuration, you can go to the users tab and click the notify button top right.
Select a user and choose send via email, write some text and click submit.
