---
sidebar_position: 3
---

# Additional Configuration


import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

### Discord Auth
Edit the `.env` file and look for discord related options :) make sure to fill out the desired options correctly.

**Setting up auth**<br/>
[How](http://faq.demostoreprestashop.com/faq.php?fid=133&pid=41) to get CLIENT_ID and CLIENT_SECRET <br />
for the redirect uri you have to use YOUR_WEBSITE_URL + /auth/callback (example: https://bitsec.dev/auth/callback)

**Adding the discord bot**<br/>
if you would like to automatically force new users into your discord server after they have verified, you will need to set up a discord bot. This can be an already existing discord bot in your server.

1. add your discord bot to your server and give him the appropriate permissions.
2. add your discord bot token to the .env file.
3. add your discord server(guild) ID to the .env file.

That's it! The dashboard can now use your bot to make API calls to discord to place new users into your discord server. your bot will not come online as we only use it to make API calls when some 1 verifies, you can still use your bot as your normally would :)

**Custom role reward**<br/>
If you would like to give your users a custom role automatically when they verify their discord account, you have to copy the ID of an existing role from your discord server and place it in the .env as well.

### ReCAPTCHA v2
Controlpanel uses visible reCAPTCHA to secure the login page from brute-force attacks. If the login attempt is considered suspicious, users may be required to perform a reCAPTCHA challenge.

You can generate your own keys in the [admin console](https://www.google.com/recaptcha/admin/create)

To add your keys you need to edit the `.env`
```bash
#GOOGLE RECAPTCHA
RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
```


### Mail Configuration
To send out notifications and mails, you will need to config your mail variables correctly.
You can use a free mail server; for example from [mailjet](https://www.mailjet.com/). you can also install your own mail server using for example [mailcow](https://mailcow.email/)

Ensure to clear the config cache and restart the queue workers when making changes to the email details.<br/>
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

