'use client';
import { RootProvider } from 'fumadocs-ui/provider/next';
export function Provider({children}:{children:React.ReactNode}) { return <RootProvider search={{options:{type:'static',api:'/api/search'}}}>{children}</RootProvider>; }
