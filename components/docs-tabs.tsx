'use client';
import { Tabs as FumaTabs, type TabsProps } from 'fumadocs-ui/components/tabs';
import { useEffect, useState, type ComponentType } from 'react';
const ControlledTabs = FumaTabs as ComponentType<TabsProps & {value?:string;onValueChange?:(v:string)=>void}>;
const escape=(s:string)=>s.toLowerCase().replace(/\s/,'-');
export function DocsTabs({originalValues,queryString,groupId,items,...props}:TabsProps & {originalValues?:string[];queryString?:boolean}){
 const [value,setValue]=useState(items?.[0]?escape(items[0]):undefined);
 useEffect(()=>{if(!queryString||!groupId||!items)return;const read=()=>{const selected=new URLSearchParams(location.search).get(groupId);const index=originalValues?.indexOf(selected||'')??-1;if(index>=0)setValue(escape(items[index]));};read();window.addEventListener('popstate',read);return ()=>window.removeEventListener('popstate',read);},[groupId,queryString,items,originalValues]);
 if(!queryString)return <FumaTabs items={items} groupId={groupId} {...props}/>;
 return <ControlledTabs items={items} groupId={groupId} value={value} onValueChange={v=>{setValue(v);if(!groupId)return;const index=items?.findIndex(item=>escape(item)===v)??-1;const url=new URL(location.href);url.searchParams.set(groupId,originalValues?.[index]||v);history.replaceState(null,'',url);}} {...props}/>;
}
