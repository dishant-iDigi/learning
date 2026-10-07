//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;
let userauthorized = false;

app.use(bodyParser.urlencoded({ extended: true }))
function passcheck(req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveCode") {
        userauthorized = true;
    }
    next();
}

app.use(passcheck);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/check', (req, res, next) => {
    if (userauthorized) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect('/');
    }
})


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})