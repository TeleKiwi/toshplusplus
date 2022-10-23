# tosh++
A text-based lang that could be a step up from dragging blocks.

## FAQS

### Why name it tosh++?
Years ago, there was a project called tosh that was a text-based version of Scratch 2. Someone did make a version
for Scratch 3, but it was never hosted online. Like C++ was to C, tosh++ aims to succeed tosh2 & tosh3.

### What are your goals?
In no particular order;
[-] Compile to a format that could be simply translated into .sb3 files
[-] Produce a human-readable and simple AST that can be dumped
[-] Have a full type system 
[-] Good error reporting
[-] Support all native Scratch 3 modules 
[-] Add a few bonus features Scratch 3 doesn't have (for loops, macros)

### How long will this take to finish?
IDK. Might never finish it, to be honest

## SETUP

### Dependencies
- Node 19 >=
- TypeScript
- Git
- TS-Node (optional)

### Cloning & running
git clone this repo, then either:
- run npm start if ts-node isn't an option
- run npm run ts-start if it is an option
