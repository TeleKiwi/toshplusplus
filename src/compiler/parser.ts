export function parse(lexedText: string | string[]) {
    let data: object = { data: lexedText};
    return [data, null];
}