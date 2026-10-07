import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))
var bandname="";

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));
function bandnamegenerator(req,res,next){
  console.log(req.body);
  bandname= req.body["street"] + req.body["pet"];
  next();
}
app.use(bandnamegenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit',(req,res)=>{
  res.send(`<h1> Your Band name is</h1> <br> ${bandname}`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
