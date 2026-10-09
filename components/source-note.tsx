import { BookOpenCheck } from 'lucide-react';
const revision = 'b3bd1ed50b9f50b76797d09609980fdb4ae70252';
export function SourceNote({ files }: { files: string[] }) {
  return <details className="not-prose mt-8 rounded-lg border border-fd-border bg-fd-muted/30 px-4 py-3 text-xs"><summary className="flex cursor-pointer items-center gap-2 font-medium text-fd-muted-foreground"><BookOpenCheck className="size-4 text-fd-primary"/>PS: Source checked against CtrlPanel 1.2.0</summary><ul className="mt-3 space-y-2">{files.map(file => <li key={file}><a className="text-fd-muted-foreground underline underline-offset-4 hover:text-fd-primary" href={`https://github.com/Ctrlpanel-gg/panel/blob/${revision}/${file}`} target="_blank" rel="noreferrer">{file}</a></li>)}</ul></details>;
}
