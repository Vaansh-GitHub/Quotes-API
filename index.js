const express=require("express");
const router = require("./routes/routes.js");

const app=express();

app.use(express.urlencoded({extended:false}));
app.use("/quotes",router);

app.listen(8000,()=>console.log("Server started!"));