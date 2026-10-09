import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
export default function Page(){return <HomeLayout {...baseOptions()}><article className="blog-article"><h1>Markdown page example</h1><p>You don’t need React to write simple standalone pages.</p></article></HomeLayout>}
