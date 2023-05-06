---
sidebar_position: 1
---

# Products

import DocusaurusImageUrl from '@site/static/img/docusaurus.png';
import useBaseUrl from '@docusaurus/useBaseUrl';

With products, you can configure the resources allocated to new servers created on your panel. You can set the custom pricing and link products to specific nodes and eggs.
You can check out the pterodactyl server creation page for more information about the specific options like CPU and IO.

<img src={useBaseUrl('/img/userguides/product-page.png')} />

### Credits System
Credits are charged hourly based on the monthly price you've configured (price / 30 / 24)
This means that the price of your products won’t be charged right away when the user creates a server, but instead, the credits are reduced hourly—giving the user the option to cancel and create servers freely anytime.
When the user runs out of credits, his server will automatically be suspended.


## Product Linking
<img width="50%" height="50%" src={useBaseUrl('/img/userguides/product-linking-example.gif')} /><br/>
Example of making a product for Minecraft servers.

### Information
Product linking allows you to configure the nodes and eggs this product can be a used on.
For example, you have a node that is more powerful than another node, you may most likely want to charge a bit extra for the usage of this node.
Or you may have a node dedicated for Minecraft hosting and another node for discord bots. Using the node and egg links, you can easily keep your pricing and server creation separated.

### Hiding nodes and eggs
You can hide specific nodes or eggs from being used by not configuring them in any of your products. This way, they won’t show up in the server creation page and therefore can’t be used by your customers. This is great if you have some nodes or eggs that you want to exclude from Ctrlpanel.

### Tips
If you have a well-configured product, you can use the Copy button to copy the product to create slight variations of it easily :) 
