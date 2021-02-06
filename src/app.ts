import express from "express";
import {writeText} from "./write";


export const app = express();

app.get("/", (req, res) => {
    res.redirect("/example/gameover");
});

app.get("/:alphabet/:phrase", (req, res) => {
    import(`../alphabets/${req.params.alphabet}`).then(async (module) => {
        const {alphabet, phrase} = req.params;

        const image = await writeText(module[alphabet], phrase);

        res.set("Content-Type", "image/png");
        res.end(Buffer.from(image));

    }).catch((next) => {
        // eslint-disable-next-line no-console
        console.log(next);
        res.status(500).send(req.params);
    });
});
