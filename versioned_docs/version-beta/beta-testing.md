---
sidebar_position: 4
title: Beta testing checklist
---

# Beta testing checklist

This is the guide for beta testers. It lists the features and fixes in 1.3.0 that are worth testing extra carefully before the release goes stable.

## Authentication and accounts

- [ ] **2FA (TOTP)** - enable it from Profile -> Security (scan the QR), log out and log back in with a code, use one recovery code once, then disable 2FA with your password.
- [ ] **2FA edge cases** - wrong code, expired code, throttling after repeated failures, and "remember me" sessions all behave correctly.
- [ ] **Captcha** - the configured captcha works on login, registration, password reset and ticket creation. If you use Turnstile, check both visible and invisible modes. Confirm the preview in admin settings matches the configured type.
- [ ] **Registration** - the Privacy Policy / Terms checkbox is required only when the corresponding page is enabled.
- [ ] **Referral email verification** - with the option on, the reward is withheld until the referred account verifies its email, then granted once (no duplicate on concurrent verification).
- [ ] **Discord linking** - an account below the minimum age is rejected; a failed server join notifies the user and admins.

## Servers

- [ ] **Cancel and Resume** - cancel a server, then resume it. Buttons and wording update, and failures show a friendly message.
- [ ] **Product limit on upgrade/downgrade** - a product that reached the user's per-account limit is marked as not fitting and cannot be selected.
- [ ] **Upgrade billing** - upgrade charges only after success, downgrade refunds the difference, retries do not double-charge, and the price is whole credits.
- [ ] **Node placement** - new servers land only on nodes with free allocations and below their allocation limit; a node at its limit is skipped.
- [ ] **Egg variable `0`** - creating from an egg with a required variable defaulting to `0` works.
- [ ] **Broken servers** - a server with no Pterodactyl ID: list and settings load, actions are disabled with an explanation, and deletion still works.
- [ ] **Status badges** - Setting up / Failed / Suspended / Canceled / Active render correctly on user and admin lists.
- [ ] **Product sorting** - the sort control on server creation reorders products as expected.

## Payments and billing

- [ ] **Admin payment actions** - confirm, recheck, cancel, reopen and refund follow the allowed transitions. Refund is one-way, paid can only move to refunded, and credits are granted only once.
- [ ] **Recheck** - the button appears only for gateways that support it, and a recheck that resolves a pending payment marks it paid.
- [ ] **Gateway availability** - at checkout, a gateway unsupported for the currency or below its minimum is disabled with the reason, and submitting it server-side is rejected.
- [ ] **Handling fees** - configure none / percentage / fixed (with min and max) per gateway. The fee is correct at checkout, in the order total, in the admin payments table, on invoices, and in the PayPal and Stripe breakdowns.
- [ ] **Totals** - coupons apply before tax, totals recalculate live, and partner discounts apply.
- [ ] **Invoices** - after a payment, the customer receives the invoice PDF by email; admins can download invoices from the payments page; a failure shows a friendly error.
- [ ] **Stripe with tax** - with tax enabled, a successful Stripe payment is not marked failed. Test a taxed order, and a currency that exposes rounding (for example a zero-decimal or three-decimal currency).
- [ ] **Credits name** - the payment confirmation email and the payment lists show the configured credits name.

## Admin, settings and tickets

- [ ] **Settings page** - sections and descriptions render, conditional fields show and hide with the selected mode, unit suffixes are correct, the mobile layout is usable, and the active tab plus collapsed-sidebar behaviour are correct.
- [ ] **Masked secrets** - secrets and passwords are masked; saving the form without editing a secret does not overwrite it; editing it does.
- [ ] **Settings permission** - a user without settings permission cannot open the settings page.
- [ ] **Delete confirmations** - every admin delete button asks for confirmation.
- [ ] **Mass notification** - can send to all users, or selected users, or roles alone.
- [ ] **Tickets** - staff with ticket write access can change priority and category, and the admin ticket list sorts by priority.
- [ ] **Login logo** - the logo is not overwritten after an update.
- [ ] **Themes** - the BlueInfinity layout matches the default theme.

## Operations

- [ ] **Snapshots** - `snapshot:create` produces a compressed file and `snapshot:load` restores the database.
- [ ] **Log rotation** - `logs:prune` (try `--dry-run` first) compresses older daily logs and deletes logs past retention.
- [ ] **Redis default** - cache, session, queue and settings work with Redis as the default store, and can still be switched via environment variables.