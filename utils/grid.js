function emptyGrid(size) {
    return ("\n" + ("0 ".repeat(size))).repeat(size);
}

const size = process.argv[2];

console.log("/*");
console.log(emptyGrid(size ? size : 8));
console.log("\n*/");
