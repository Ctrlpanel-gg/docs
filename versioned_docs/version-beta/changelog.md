---
sidebar_position: 4
---

# Changelog

Here you'll find a full list of bugs fixed and new features added in the new version of CtrlPanel. This list will help you understand which features are worth testing extra carefully.

## Fixed Bugs

- Fixed a bug where the installer redirected incorrectly when using a non-default port
- Fixed credits display bug where in some parts of the UI credits were shown as the actual value multiplied by 1000
- Fixed credits formatting in API responses - the API no longer returns user credits multiplied by 1000
- Fixed a bug where the OOM Killer checkbox didn't save its value
- Fixed admin overview page returning HTTP 500 when the `.git` directory is not found in the CtrlPanel directory
- Fixed 500 error when using the "Login as user" feature
- Fixed potential referral system abuse via account deletion - admins can now see deleted referrals
- Fixed `php artisan route:cache` throwing an error due to duplicate route names
- Fixed a bug where mass user notifications could fail if sending an email was unsuccessful (e.g. when the mail server returned that the email doesn't exist)
- Fixed server creation flow - this could cause issues such as credits being deducted while server creation failed due to an error
- Fixed a bug where the allocation limit worked globally instead of per-node, which prevented all new server creation when only one node reached its limit while others were still available
- Fixed a bug where the Upgrade/Downgrade modal did not include the billing cycle of the product
- Fixed an issue where database seeding during installation could fail due to a database column type mismatch
- Fixed a bug where admins were unable to use "Log back in" after using "Login As User"
- Fixed a bug where creating multiple coupons using a range function caused their value to be saved as 1000x less
- Fixed a bug where manual email confirmation did not trigger events, which prevented users from receiving email confirmation and referral rewards

## New Features

- User creation command now returns an error if you try to use an already existing email or Pterodactyl ID
- Products now accept `0` for unlimited resource values in product configuration
- Added support for coupons with unlimited uses
- Added ability to change thousand and decimal separators - either forced globally for all users or individually based on each user's selected locale
- Added ticket deletion confirmation prompt
- Added a notification 3 days before server suspension when a user doesn't have enough credits to renew
- Added rate limit for server creation to prevent abuse when a user could create multiple servers by spamming the create button
- Products in the upgrade/downgrade list are now sorted by price instead of creation date
- Added Ukrainian localization
- Extended Russian localization
- Admins can now select all eggs in a nest by clicking on the nest name in the product creation list
- Added optional reason for server/user moderation actions via API
- Removed global minimum-credits setting - each product must now have its own minimum-credits value to prevent negative user balance on server creation
- Improved CtrlPanel version display on the overview page - it now shows the latest commit hash
- You can now reset the installer step without opening DevTools and clearing site data - just add the `?reset` parameter to the URL
- Reordered settings items for better readability
- Fully reworked payment gateways. Now admins should configure webhook tokens for each payment gateway.

> This should be the full changelog. It was put together manually, so we really hope we haven't missed anything.
