import { help } from './cli/help';
import { lex } from './compiler/lexer';
import { parse } from './compiler/parser';

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

const [lexResult, lexError] = lex(argv[0])
if(lexError) {
    console.error(lexError);
    process.exit(1);
} else {
    const [parseResult, parseError] = parse(lexResult);
    if(parseError) {
        console.error(parseError);
        process.exit(1);
    } else {
        console.log("File compiled successfully!");
        process.exit(0);
    }
}
