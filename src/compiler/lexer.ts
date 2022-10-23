import { readFileSync, writeFileSync } from 'node:fs';
import { dumpLex } from "../main";

const typeList = ["num", "string", "bool"];

export function lex(inputFile: string) {
    let file: string[] = [];
    try {
        file = readFileSync(inputFile, 'utf-8').split("\n")
    } catch (err) {
        return [null, `Failed to find file ${inputFile}.`];
    }

    let lexedFile: string[] = [];
    for(let i = 1; i <= file.length; i++) {
        let e = file[i - 1];
        let [data, error] = lexLine(e);
        if(error !== null) {
            return [null, `Error lexing line ${i} - ${error}`];
        } else {
            lexedFile.push(data);
        }
    }


    if(dumpLex) {
        writeFileSync("lexedfile.topp.txt", lexedFile.toString().replaceAll(/,/g, "\n"), 'utf-8');
    }
    
    return [lexedFile, null]
}

function lexLine(line: string) {
    let segments = line.split(" ");

    if(typeList.includes(segments[0])) {
        if(segments[2] !== "=") {
            return [null, `Invalid symbol ${segments[2]}: expected \"=\".`]
        }
        switch(segments[0]) {
            case "num": {
                try {
                    return [`NUMBER(${segments[1]}:${Number.parseFloat(segments[3])})`, null];
                } catch (err) {
                    return [null, `Could not lex \"${segments[3]}\" as type NUMBER.`]
                }
            }
            case "bool": {
                if(segments[3] !== "true" && segments[3] !== "false") {
                    return [null, `Could not lex \"${segments[3]}\" as type BOOLEAN.`]
                } else {
                    return [`BOOLEAN(${segments[1]}:${segments[3]})`, null];
                }
            }
            default: {
                return [null, `Invalid type ${segments[0]}.`]
            }
        }
    }
    

    let data: string = segments.toString().replaceAll(/,/g, " ")
    return [data, null];
}