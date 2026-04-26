import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import apiSidebar from "./api-docs/sidebar";

const sidebars: SidebarsConfig = {
  apisidebar: [
    { type: "doc", id: "index" },
    ...apiSidebar.slice(1),
  ],
};

export default sidebars;