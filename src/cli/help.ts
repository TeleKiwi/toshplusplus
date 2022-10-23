export function help(hFlag: boolean) {
    console.log("USAGE: tosh++ file <flags>")
    console.log("<> denotes optional areas\n")
    console.log("-h              Prints this help message")
    console.log("-da [filename]  Dumps the AST to a file")
    console.log("-dl [filename]  Dumps the lexed text to a file")
    if(!hFlag) {
        console.error("Error: no flags provided.")
    }
    process.exit();
}