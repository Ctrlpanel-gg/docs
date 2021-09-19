---
sidebar_position: 3
---

# Additional Configuration


import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

### Discord Auth
Edit the `.env` file and look for Discord related options :) Make sure to fill out the desired options correctly.

**Setting up Auth**<br/>
[How](http://faq.demostoreprestashop.com/faq.php?fid=133&pid=41) to get CLIENT_ID and CLIENT_SECRET <br />
for the redirect uri you have to use YOUR_WEBSITE_URL + /auth/callback (example: https://bitsec.dev/auth/callback)

**Adding the Discord Bot**<br/>
If you would like to automatically force new users to join your Discord server after they have verified, you will need to set up a Discord bot. This can be an already existing Discord bot in your server.

1. add your Discord bot to your server and give him the appropriate permissions.
2. add your Discord bot token to the .env file.
3. add your Discord server(guild) ID to the .env file.

That's it! The Dashboard can now use your bot to make API calls to Discord to place new users into your Discord server. Your bot will not come online as we only use it to make API calls when someone verifies, you can still use your bot as you normally would :)

**Custom Role Reward**<br/>
If you would like to give your users a custom role automatically when they verify their Discord account, you have to copy the ID of an existing role from your Discord server and place it in the .env as well.

### ReCAPTCHA v2
ControlPanel uses visible reCAPTCHA to secure the login page from brute-force attacks. If the login attempt is considered suspicious, users may be required to perform a reCAPTCHA challenge.

You can generate your own keys in the [admin console](https://www.google.com/recaptcha/admin/create)

To add your keys you need to edit the `.env`
```bash
#GOOGLE RECAPTCHA
RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
```


### Mail Configuration
To send out notifications and mails, you will need to configure your mail variables correctly.
You can use a free mail server; for example from [mailjet](https://www.mailjet.com/). You can also install your own mail server using, for example, [mailcow](https://mailcow.email/)

Ensure you clear the config cache and restart the queue workers when making changes to the email details.<br/>
`php artisan config:clear` and `php artisan queue:restart`

```bash
#.env variables you need to configure

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"
```

