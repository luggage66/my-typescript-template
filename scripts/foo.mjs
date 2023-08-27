import { readFile } from "node:fs/promises";

/** @type {FooBar} */
let foo = {
    message: "bob"
}

const data = await readFile("./package.json", { encoding: "utf8" });

console.log(data);
