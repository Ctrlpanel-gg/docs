import type { Metadata, Viewport } from "next";
import { Provider } from "@/components/provider";
import "./global.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://ctrlpanel.gg"),
  title: {
    default: "CtrlPanel.gg",
    template: "%s | CtrlPanel.gg",
  },
  description:
    "The open-source Pterodactyl management panel. Installation guides, billing configuration, and a complete API reference.",
  icons: { icon: "/img/controlpanel.ico" },
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0e11" },
  ],
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/red-hat-display-3.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#nd-page"
          className="sr-only z-[60] rounded-md bg-fd-primary px-4 py-2 text-sm font-semibold text-fd-primary-foreground focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
        >
          Skip to content
        </a>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
