const stdin = process.openStdin();

//
//    $ echo "/*
//    0 1 0
//    0 0 1
//    1 1 1
//    */" | npm run string
//
//  > 010001111

let grid = "";

stdin.on("data", (chunk) => {
    grid += chunk;
});

stdin.on("end", () => {
    grid = grid.replace("/*", "").replace("*/", "");
    grid = grid.split(" ").join("");
    grid = grid.split("\n").join("");

    console.log(grid);
});
