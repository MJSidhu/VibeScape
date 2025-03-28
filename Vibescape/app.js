import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const port=3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true }))

app.get("/", (req,res)=>{
    res.render("index")
})

app.listen(port,function (){
    console.log("Server is running on port "+port)
})
