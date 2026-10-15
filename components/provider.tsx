"use client";
import { RootProvider } from "fumadocs-ui/provider/next";
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <RootProvider
      theme={{ defaultTheme: "dark" }}
      search={{ options: { type: "static", api: "/api/search" } }}
    >
      {children}
    </RootProvider>
  );
}
