---
sidebar_position: 5
title: Changelog
---

# CtrlPanel 1.3.0

1.3.0 is a large release. It brings two-factor authentication, a reversible server cancellation flow, full manual payment controls, gateway fees and corrected checkout totals, a redesigned settings page, and a significant overhaul of the extension system. Highlights below.

## New features

### Authentication and accounts

- Two-factor authentication, starting with TOTP. Enroll from the **Security** tab in your profile with a QR code and store your one-time recovery codes. The implementation is modular, so more methods can be added later. Developers can also use the built-in Dummy method, which is active only when `APP_ENV=local`, to build and preview themes. Do not enable the Dummy method in production.
- Optional minimum Discord account age for linking (default 30 days; disabled by default). Discord accounts younger than the limit are rejected.
- Failed Discord server joins now notify the affected user and the administrators instead of failing silently.
- Optional requirement to verify an email address before a referral reward is granted.
- Privacy Policy and Terms of Service checkbox on the registration form, shown only when the corresponding pages are enabled.

### Servers

- Server cancellations are reversible. A canceled server now shows a **Resume** button instead of Cancel.
- A **Sort** control on the server creation page sorts products by price and other resource values.
- Server status badges reworked on user and admin lists: **Setting up**, **Failed**, **Suspended**, **Canceled** and **Active**.

### Payments and billing

- Full manual payment controls for admins: **Confirm**, **Recheck**, **Cancel**, **Reopen** and a one-way **Refund**.
  - Recheck is offered only for gateways that implement it. All built-in gateways do.
  - Refund marks a payment as refunded. Credits and slots are not returned.
  - Paid payments can only move to refunded, and credits and rewards are granted only on the transition to paid, so a payment can never be granted twice.
- Per-gateway **handling fees**: none, percentage or fixed, with optional minimum and maximum. Fees are shown at checkout, included in the order total, listed in the admin payments table, and itemized on invoices and in the PayPal and Stripe breakdowns.
- Gateways that do not support the selected currency or fall below the gateway minimum are disabled at checkout with the reason, and are also rejected server-side.
- More currencies supported, matching what the payment gateways accept.

### Admin, settings and interface

- The settings page is reorganised into described sections, with conditional fields (shown only when relevant) and unit suffixes on numeric inputs.
- Secrets and passwords are masked on the settings page and are not overwritten when the form is saved with the masked value.
- The settings page now requires the matching permission to view.
- All admin delete buttons use a proper confirmation dialog.
- The mass-notification form accepts any single target (all users, selected users or roles) instead of forcing both user and role fields.
- Staff with ticket write access can change a ticket's priority and category, and the admin ticket list is sortable by priority.
- The login page logo survives updates, and the BlueInfinity theme layout is aligned with the default theme.

### Operations

- One-command database snapshots: create with `php artisan snapshot:create name`, restore with `php artisan snapshot:load name`. Snapshots are gzipped and stored locally.
- Daily log rotation with compression. `logs:prune` runs daily, compresses older daily logs and removes logs past the retention period (14 days by default, configurable with `LOG_RETENTION_DAYS`).
- Redis is now the default cache, session and queue. It can still be overridden through environment variables.

## Bug fixes

- Setup no longer fails on MySQL/MariaDB because of incompatible migrations.
- Customised default roles (name, colour, permissions and power) are no longer overwritten by seeders or updates.
- Server creation accepts egg variables whose required default is `0`.
- Successful Stripe payments are no longer flagged as failed. The mismatch appeared when tax was enabled: the expected total was not rounded to the currency's smallest unit before comparing it with the gateway amount.
- Invoices generate again after a payment and are emailed to the customer as a PDF attachment. Admins can download them from the payments page, and a failed generation shows a friendly error.
- Checkout totals are correct again: coupons apply before tax, totals recalculate live, and partner discounts are computed per user.
- Payment lists and confirmation emails show the actual credit product name instead of a hard-coded "Credits".
- Server upgrades and downgrades are hardened: per-account product limits are enforced, credits are charged only after success, retries cannot double-charge, and downgrades refund the difference.
- Node selection now respects each node's allocation limit, so servers are not placed on nodes that cannot hand out an allocation.
- Servers missing their Pterodactyl ID no longer break the server list or settings page. Their actions are disabled with an explanation, they cannot be upgraded, and they can still be deleted.
- Server creation and upgrade failures, and Pterodactyl registration failures during sign-up, show a friendly message or form error instead of a crash page. Raw Pterodactyl details stay in the logs.
- The credit run-out estimate on the home page is no longer stuck at a fixed ceiling.
- The web installer no longer drops a custom port from the panel URL.
- The server sync deletes a server only on a confirmed `404`. Timeouts, `403` and `500` responses are skipped instead of removing servers.
- A broken extension can no longer prevent the panel from starting.
- `GET /api/users` supports filtering by the linked Discord account again (`[discordUser.id]`).

## Security

- User-submitted rich content (legal pages, MOTD, useful links, ticket info, notifications and alerts) is sanitised against script injection. Only privileged users could submit such content, so this is non-critical.
- Pterodactyl and other provider errors are sanitised everywhere. Internal addresses, credentials and response bodies stay in the logs and never reach users or API clients.
- The settings page, settings values and admin endpoints respect their permissions.
- Secret values are masked in the settings interface.

## Under the hood

- Laravel 12.
- OpenAPI specification generation for the API using Scribe (`php artisan scribe:generate`), with validation rules aligned between the admin and API controllers.
- The extension system received a significant overhaul. Extensions can ship their own database seeders, sidebar pages, middleware, routes, migrations and Artisan or scheduled commands, following standard Laravel directory conventions. New `permissions:sync` and `permissions:cleanup` commands manage permissions and roles. A full write-up will follow on the blog and in the extension development documentation.
- Captcha is now an internal implementation with no third-party composer packages, used consistently across login, registration, password reset and ticket creation.

**Full Changelog**: https://github.com/Ctrlpanel-gg/panel/compare/1.2.0...1.3.0