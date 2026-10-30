/** Text artwork supplied for the landing page. Keep the spaces and slashes intact. */
export const asciiWordmark = String.raw`  /$$$$$$   /$$               /$$ /$$$$$$$                               /$$
 /$$__  $$ | $$              | $$| $$__  $$                             | $$
| $$  \__//$$$$$$    /$$$$$$ | $$| $$  \ $$ /$$$$$$  /$$$$$$$   /$$$$$$ | $$      /$$$$$$   /$$$$$$
| $$     |_  $$_/   /$$__  $$| $$| $$$$$$$/|____  $$| $$__  $$ /$$__  $$| $$     /$$__  $$ /$$__  $$
| $$       | $$    | $$  \__/| $$| $$____/  /$$$$$$$| $$  \ $$| $$$$$$$$| $$    | $$  \ $$| $$  \ $$
| $$    $$ | $$ /$$| $$      | $$| $$      /$$__  $$| $$  | $$| $$_____/| $$    | $$  | $$| $$  | $$
|  $$$$$$/ |  $$$$/| $$      | $$| $$     |  $$$$$$$| $$  | $$|  $$$$$$$| $$ /$$|  $$$$$$$|  $$$$$$$
 \______/   \___/  |__/      |__/|__/      \_______/|__/  |__/ \_______/|__/|__/ \____  $$ \____  $$
                                                                                 /$$  \ $$ /$$  \ $$
                                                                                |  $$$$$$/|  $$$$$$/
                                                                                 \______/  \______/`;

export function AsciiWordmark() {
	return <pre className="m-0 block border-0 bg-transparent p-0 select-text whitespace-pre text-left font-mono font-medium not-italic leading-[1.16] tracking-normal text-[var(--landing-foreground)] text-[length:var(--landing-ascii-size)] [tab-size:2]" aria-hidden="true">{asciiWordmark.split('\n').map((line,index)=><span key={index}>{line.slice(0,77)}<span className="text-[#159dd7] dark:text-[#27a9e1]">{line.slice(77)}</span>{index<10?'\n':''}</span>)}</pre>;
}
