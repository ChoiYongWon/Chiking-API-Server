var express = require("express")
var app = express();
var mongo_setup = require("./db/setup")()
var session = require("express-session")
var MongoStore = require("connect-mongo")(session)
var mongoose = require("mongoose")
var route_user = require("./routes/restapi/user")
var route_chicken = require("./routes/restapi/chicken")
var route_login = require("./routes/restapi/login")
var route_logout = require("./routes/restapi/logout")
var route_vote = require("./routes/restapi/vote")



app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(session({
    secret: "clzlddktjdrhdgkfk",
    resave: false,
    saveUninitialized: false,
    cookie:{
        secure:true,
        maxAge: 10 * 60 * 1000
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        
    }),
    
}))

app.use("/user",route_user)
app.use("/chicken",route_chicken)
app.use("/login", route_login)
app.use("/logout", route_logout)
app.use("/vote",route_vote)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/html/index.html")
    

})

app.listen(8000,()=>{
    console.log("server on port 8000")
})