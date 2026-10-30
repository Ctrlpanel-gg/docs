/** Text artwork supplied for the landing page. Keep the spaces and slashes intact. */
const wordmark = String.raw`  /$$$$$$   /$$               /$$ /$$$$$$$                               /$$
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
  return <pre className="landing-ascii" aria-hidden="true">{wordmark.split('\n').map((line,index)=><span key={index}>{line.slice(0,77)}<span className="landing-ascii-domain">{line.slice(77)}</span>{index<10?'\n':''}</span>)}</pre>;
}
