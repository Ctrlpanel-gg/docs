# CtrlPanelDashboard

A React component recreating the supplied dashboard screenshot. React and the accompanying CSS are its only dependencies. The logo and icons are inline SVG; the Source Sans 3 font is bundled with its OFL license.

```tsx
import { CtrlPanelDashboard } from './ctrlpanel-dashboard/CtrlPanelDashboard';

<CtrlPanelDashboard
  username="demo"
  credits={250}
  serverCount={0}
  serverLimit={1}
  referralCount={0}
  commission={100}
  referralUrl="https://your-panel.example/register?ref=YOUR_CODE"
  links={{
    dashboard: '/dashboard',
    servers: '/servers',
    settings: '/admin/settings',
    phpmyadmin: '/database',
  }}
  onLogout={() => signOut()}
/>
```

Copy this entire folder into your React project. The CSS is imported by the component; your bundler should support CSS and font assets. It uses no Next.js or Fumadocs APIs.

`links` accepts the navigation IDs in the component, plus `discord`. Links default to local anchors until connected to your app. `onNavigate(id)` can instead handle internal routing; modified clicks retain normal anchor behavior. Supply the real `referralUrl`; the fallback is a demo URL formed from the current origin and username. Clipboard errors are reported visibly.

`activeItem` controls the sidebar selection. `activityLogs`, `usefulLinks`, and `motd` replace the default empty activity state, Useful Links body, and MOTD. The screenshot cuts off the Useful Links body, so no unseen links were invented. The screenshot's “commision” spelling is retained.

The sidebar collapses on desktop and becomes a closed-by-default drawer on mobile. All colors are scoped to `.cp-dashboard` and the component never changes the host application's theme.

Local preview: `/dashboard-preview/`.
