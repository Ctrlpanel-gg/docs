---
sidebar_position: 3
---

# Additional Configuration

:::info

The StripeWebhook URL has been changed in `v0.9` due to the new extension support. Read the Stripe section below, it contains the new URL.

:::

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

## Misc Configuration

### Setup Auth
[How](http://faq.demostoreprestashop.com/faq.php?fid=133&pid=41) to get CLIENT_ID and CLIENT_SECRET <br />
for the redirect URI, you have to use YOUR_WEBSITE_URL + /auth/callback (example: https://demo.ctrlpanel.gg/auth/callback)

**Adding the Discord Bot**<br/>
If you would like to automatically force new users to join your Discord server after they have verified, you will need to set up a Discord bot. This can be an already existing Discord bot in your server. If your bot isn't in the server yet, add it by using this: `https://discord.com/api/oauth2/authorize?client_id=<CLIENT_ID_HERE>&permissions=8&scope=bot`. Replace the `<CLIENT_ID_HERE>` with your bots client ID.

### Setup Discord OAuth2
1. Head to `https://YOUR_DOMAIN_HERE/admin/settings#misc` (change `YOUR_DOMAIN_HERE` to your dashboard domain)
2. On the Discord section put in the following:
- Your bot's client ID
- Your bot's client secret
- Your bot's token
- Your Discord Guild ID (optional, but useful if you want the user to be added to your server)
- Your Discord Invite (optional, but useful if you want the user to be added to your server)
- Your Discord Role ID (optional, but useful if you want the verified user to recieve a role on your server after verifying)
3. Then press the "Submit" button to save.

That's it! The Dashboard can now use your bot to make API calls to Discord to place new users into your Discord server. Your bot will not come online as we only use it to make API calls when someone verifies, you can still use your bot as you normally would as it won't affect the bot itself.

### reCAPTCHA v2

Go to `https://<your.ctrlpanel.gg>/admin/settings#misc`

Ctrlpanel uses visible reCAPTCHA to secure the login page from brute-force attacks. If the login attempt is considered suspicious, users may be required to perform a reCAPTCHA challenge.

You can generate your own keys in the [admin console](https://www.google.com/recaptcha/admin/create)

Go to the Admin Misc settings and change the `reCAPTCHA Site-Key` and `reCAPTCHA Secret-Key`. Once you've updated it, press `Submit`. If it works correctly then below the reCAPTCHA settings under `Your reCAPTCHA`, you should be able to see the reCAPTCHA without the `This reCAPTCHA is for testing purposes only. Please report to the site adminif you are seeing this`.

**FAQ for reCAPTCHA**<br/>

**Q:** It says `ERROR for site owner: Invalid site key` <br/>
**A:** This means that you put in the incorrect site key. Double check you're using v2 and `I'm not a robot` checkbox on the reCAPTCHA create page which is found [here](https://www.google.com/recaptcha/admin/create)

### Manual Mail Configuration

To send out notifications and mails, you will need to configure your mail variables correctly.
You can use a free mail server; for example, from [Mailjet](https://www.mailjet.com/). You can also install your own mail server using, for example, [Mailcow](https://mailcow.email/)

Go to `https://<your.ctrlpanel.gg>/admin/settings#misc` and enter your mail credentials that you recieved from whichever provider.

Once set run these 2 commands to ensure that emails work:
```bash
php /var/www/controlpanel/artisan config:clear
php /var/www/controlpanel/artisan queue:restart
```

To test the mail configuration, you can go to the Users tab and click the notify button top right.
Select a user and choose to send via email, write some text and click submit. It may take a few minutes until it's sent.

### Payment Configuration

:::info

You are able to use Paypal, Stripe, Mollie and Mercadopago as a payment option. If you want to add a different form of payment that isn't covered by those you have to add it yourself.

:::

#### PayPal

To use the PayPal payment gateway, you have to set up an application on Paypal Developer Dashboard which you can find [here](https://developer.paypal.com/developer/accounts/).

To setup Paypal payments, go to "My Apps & Credentials" and choose either "Live" for production use or "Sandbox" for testing use of PayPal.

Create a app, give it any name you want, and copy the Client ID and the Secret. After go back to your Ctrlpanel setup and paste in the credientials into the Paypal section. If you have the Live mode on, put the Client ID and Secret in the first 2 boxes. If you have it on Sandbox, put it in the last 2 boxes.

The only "App Feature Option" that Ctrlpanel needs is "Accept Payments".

#### Stripe

To use Stripe as your payment gateway, you first have to setup a "company" on Stripe's dashboard which you can find [here](https://dashboard.stripe.com/account/onboarding/business-structure)

To setup Stripe, go to the Developer page and click on API Keys. You only need the Secret key in order to use Stripe as your payment gateway. Once you have the secret key go to your Ctrlpanel setup and paste the secret into the `Stripe Secret Key` section.

Now, you will need to setup a Stripe Webhook in order to accept payments that are not 100% instantly confirmed by stripe (Klarna, Bank-Transfer etc.).
To do so, click on Webhooks and add an endpoint.
The endpoint route would look something like this: `https://<your.ctrlpanel.gg>/extensions/payment/StripeWebhooks`. Change the `<your.ctrlpanel.gg>` to your Ctrlpanel setup link.
Choose the `payment_intent.succeded` event to be sent to your WebhookRoute.
After the webhook creation, you need to get the endpoint secret and copy paste it to your Ctrlpanel payment settings. The endpoint secret can be found in the Webhook Overview page.

In your Ctrlpanel setup, you need to provide a comma separated list of payment methods you want to support via Stripe. For example, `card,sepa_debit`. This includes both card and SEPA debit cards that can be used to pay.
To see the list of avaliable payment options with Stripe, read their documentation which can be found [here](https://docs.stripe.com/payments/payment-methods/payment-method-support).

Just like Paypal, you can change it from Live to Sandbox and vice-versa in case you want to test to make sure that your payments are working correctly.

Did something go wrong for you? We hope not, however it's very possible. If you need support, feel free to create a support thread on our [Discord](https://discord.gg/4Y6HjD2uyU).