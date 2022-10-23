import { help } from './cli/help';

let argv: string[] = process.argv.slice(2)
export let dumpAST = false;
export let dumpLex = false; 

argv.forEach((e) => {
    e.toLowerCase();
}) // must be like this or error

if(argv.length === 0 || argv.includes("-h")) {
    if(argv.length === 0) {
        help(false)
    } else {
        help(true)
    }
}

if(argv.includes("-dl")) {
    dumpLex = true;
}
if(argv.includes("-da")) {
    dumpAST = true;
}

