import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import bcrypt from "bcrypt";
import { fileURLToPath } from "url";
import songRoutes from "./routes/songRoutes.js";
import users from "./models/userModel.js"

const app = express();
const port=3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true }))

mongoose.connect("mongodb+srv://kaushal:kaushal05@cluster0.yl36jsb.mongodb.net/vibescape?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/", (req,res)=>{
    res.render("index")

})
app.get("/index", (req,res)=>{
    res.render("index")
})
app.get("/login", (req,res)=>{
    res.render("login")
})
app.get("/signup", (req,res)=>{
    res.render("signup")
})

app.post("/login", async (req,res)=>{
    try{
    const {username,password}=req.body;
    const user = await users.findOne({username}); 
    if(!user){
      return res.send("user is not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.render("login");
    }
    res.render("index");
}
catch(err){
    console.log("erorr");
    res.send("error occured");
}
});

app.post("/signup" ,async (req,res)=>{
    const {username, password} = req.body;
    try{
        const existingUser=await users.findOne({username})
        if(existingUser){
            return res.send("user already exists")
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new users({ username, password: hashedPassword });
        await newUser.save();
        res.redirect("login");
    }
    catch(error){
        console.log("error")
        res.send("error occured while siging up")
    }   
});

app.use("/songs", songRoutes);

app.listen(port,function (){
    console.log("Server is running on port "+port)
})
