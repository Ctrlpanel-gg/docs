---
authors: [1day2die, mrweez]
tags: [guides]
draft: true
slug: understanding-mpl-2.0
---

# Understanding MPL 2.0 in the Context of CtrlPanel

With the release of 1.2.0, CtrlPanel moves from AGPL 3.0 to the Mozilla Public License 2.0. This post covers what that means for everyone - users, addon and theme developers, and contributors.

<!-- truncate -->

## Why We're Making This Change

When we adopted AGPL 3.0 back in the 1.0 release, we did not fully think through its implications. In practice, AGPL 3.0 turned out to be far more restrictive than we intended - addon and theme developers couldn't legally sell their work, and users couldn't customize the panel for their own needs without publishing their changes. That was never the goal, and it was quietly killing the community we were trying to build.

MPL 2.0 fixes this. It keeps the project open and protected, while giving everyone the freedom they actually need.

As part of this transition, we are also introducing a Contributor License Agreement (CLA) for all future pull requests. Contributors will be asked to sign it when opening a PR. This is part of a broader effort to give CtrlPanel a proper legal foundation - something we should have had from the start.

:::tip

Before reading further, we recommend taking a quick look at the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/) itself - it is short, readable, and will make everything in this post much easier to follow and understand.

:::

---

## For Users

If you just run CtrlPanel to sell game servers to your customers, not much changes for you.

- You can download, install, and run the panel freely
- You can modify any files - change the UI, add features, integrate with your own systems
- You can use the panel commercially
- Your customers accessing the panel through a browser is not considered distribution - you have no obligations in that case
- If you ever give or sell a copy of your modified panel to another person or company, you must provide the modified files - but since CtrlPanel is written in PHP, there is nothing extra to prepare. The source code is already what you are distributing.

In short - run it, customize it, build a business on it. You're good.

---

## For Addon & Theme Developers

This is where the biggest change is, and where MPL 2.0 makes things much more practical.

### If your addon does not modify our core files

This is the cleanest scenario. If your addon is a separate package or file that does not touch CtrlPanel's existing source files:

- You can license it however you want, including proprietary
- You can sell it on [market.ctrlpanel.gg](https://market.ctrlpanel.gg) or anywhere else, fully closed source
- You have no MPL obligations whatsoever

This is why we are actively thinking about a more modular extension system - so that addons never need to touch core files in the first place. More on that in the future.

### If your addon modifies our core files

If your work involves editing CtrlPanel's existing source files, MPL 2.0 still allows you to sell it - but with one important condition: the modified core files must remain under MPL 2.0, and you must provide them to anyone you distribute to - which, again, is nothing extra since PHP is already source code.

This does not mean a public release. You are only required to provide source code to the people you directly sell or distribute to - not to the general public. You are not required to publish anything on GitHub or anywhere publicly accessible.

However, keep in mind that once a recipient has that source code, they are legally allowed to share it further. MPL does not restrict what recipients can do with source code they legitimately received. If keeping your modifications private long-term is important to you, the safest approach is to avoid modifying core files and build your addon as a separate package instead.

### Modular Extension System

The safest way to keep your addon code fully closed is to never touch core files at all - and we want to make that possible for every type of addon.

Currently, CtrlPanel has a modular system for payment gateways, and we are ready to expand it further. If you need an internal API or hook that does not exist yet, there are two ways to help make it happen:

- **Open an issue** on GitHub describing what you need - we will consider it for an upcoming release
- **Open a PR** that adds the implementation yourself - the fastest path to getting it in

Either way, make sure to follow our contribution guidelines before getting started - see the relevant files in the `.github` directory of the repository.

The more developers build addons the right way, the stronger and more sustainable the ecosystem becomes for everyone.

### A note for theme developers

We ask that you preserve the original CtrlPanel copyright notice in the panel footer. You are welcome to add your own copyright alongside it - just don't remove ours. This is both a license requirement and a matter of respect for the project and its contributors.

---

## For Those Looking to Fork

MPL 2.0 allows anyone to take CtrlPanel's code, modify it, and redistribute it - including commercially. If you do, here is what the license requires:

- Modified MPL-licensed files must remain under MPL 2.0
- You must keep existing copyright notices intact
- You cannot relicense the MPL-covered files as proprietary

Building on open source is fine. Stripping it of its open source nature is not.

---

## Summary

|                                            | AGPL 3.0 | MPL 2.0 |
| ------------------------------------------ | -------- | ------- |
| Run the panel commercially                 | Yes      | Yes     |
| Customize without publishing changes       | No       | Yes\*   |
| Sell closed-source addons (separate files) | No       | Yes     |
| Sell addons that modify core files         | No       | Yes\*\* |
| Fork and redistribute                      | Yes      | Yes     |

\*As long as you don't distribute the code to others.  
\*\*Modified core files must remain MPL 2.0 and source must be provided to recipients.

---

If you have questions about what this means for your specific use case, feel free to join our [Discord](https://discord.gg/ctrlpanel-gg-787829714483019826), we are happy to help. And if you want the full legal text, you can read the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/) directly.
