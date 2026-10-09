import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import './global.css';
export const metadata: Metadata = { metadataBase: new URL('https://ctrlpanel.gg'), title: {default: 'CtrlPanel.gg — Documentation', template: '%s | CtrlPanel.gg'}, description: 'The open-source Pterodactyl management panel. Installation guides, billing configuration, and a complete API reference.', icons: { icon: '/img/controlpanel.ico' } };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en" suppressHydrationWarning><head><link rel="preload" href="/fonts/red-hat-display-3.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head><body className="flex min-h-screen flex-col"><Provider>{children}</Provider></body></html>; }
