var express = require("express")
var app = express();
var route_user = require("./routes/restapi/user")
var route_chicken = require("./routes/restapi/chicken")

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/user",route_user)
app.use("/chicken",route_chicken)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/html/index.html")
})

app.listen(8000,()=>{
    console.log("server on port 8000")
})