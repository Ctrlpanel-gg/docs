import defaultComponents from 'fumadocs-ui/mdx';
import { Tab } from 'fumadocs-ui/components/tabs';
import { Callout } from '@/components/callout';
import { DocsTabs as Tabs } from "@/components/docs-tabs";
import { Cards, Card } from 'fumadocs-ui/components/card';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import { Accordions, Accordion } from 'fumadocs-ui/components/accordion';
import { DocsCard } from '@/components/docs-card';
import { SourceNote } from '@/components/source-note';
import type { MDXComponents } from 'mdx/types';
export function getMDXComponents(components?: MDXComponents): MDXComponents {
 return { ...defaultComponents, Tabs, Tab, Callout, Cards, Card, DocsCard, Steps, Step, Accordions, Accordion, SourceNote, ...components };
}
export const useMDXComponents = getMDXComponents;
