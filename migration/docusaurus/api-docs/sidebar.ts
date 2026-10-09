import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "ctrlpanel-gg-api-documentation",
    },
    {
      type: "category",
      label: "Notifications",
      link: {
        type: "doc",
        id: "notifications",
      },
      items: [
        {
          type: "doc",
          id: "list-user-notifications",
          label: "List user notifications",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "clear-all-user-notifications",
          label: "Clear all user notifications",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "get-notification-details",
          label: "Get notification details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "delete-single-notification",
          label: "Delete single notification",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "send-notification-to-users",
          label: "Send notification to users",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "send-notification-to-everyone",
          label: "Send notification to everyone",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Product Management",
      link: {
        type: "doc",
        id: "product-management",
      },
      items: [
        {
          type: "doc",
          id: "list-all-products",
          label: "List all products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "create-product",
          label: "Create product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "get-product-details",
          label: "Get product details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "update-product",
          label: "Update product",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "delete-product",
          label: "Delete product",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Role Management",
      link: {
        type: "doc",
        id: "role-management",
      },
      items: [
        {
          type: "doc",
          id: "list-all-roles",
          label: "List all roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "create-role",
          label: "Create role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "get-role-details",
          label: "Get role details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "update-role",
          label: "Update role",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "delete-role",
          label: "Delete role",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Server Management",
      link: {
        type: "doc",
        id: "server-management",
      },
      items: [
        {
          type: "doc",
          id: "list-all-servers",
          label: "List all servers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "create-server",
          label: "Create server",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "get-server-details",
          label: "Get server details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "update-server",
          label: "Update server",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "delete-server",
          label: "Delete server",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "update-server-resources",
          label: "Update server resources",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "suspend-server",
          label: "Suspend server",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "unsuspend-server",
          label: "Unsuspend server",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "User Management",
      link: {
        type: "doc",
        id: "user-management",
      },
      items: [
        {
          type: "doc",
          id: "list-all-users",
          label: "List all users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "create-user",
          label: "Create user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "get-user-details",
          label: "Get user details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "update-user",
          label: "Update user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "delete-user",
          label: "Delete user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "increment-user-balance-or-server-limit",
          label: "Increment user balance or server limit",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "decrement-user-balance-or-server-limit",
          label: "Decrement user balance or server limit",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "suspend-user",
          label: "Suspend user",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "unsuspend-user",
          label: "Unsuspend user",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Voucher Management",
      link: {
        type: "doc",
        id: "voucher-management",
      },
      items: [
        {
          type: "doc",
          id: "list-all-vouchers",
          label: "List all vouchers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "create-voucher",
          label: "Create voucher",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "get-voucher-details",
          label: "Get voucher details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "update-voucher",
          label: "Update voucher",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "delete-voucher",
          label: "Delete voucher",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
