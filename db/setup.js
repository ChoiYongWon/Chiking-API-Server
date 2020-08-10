var mongoose = require("mongoose")
const url = "mongodb+srv://root:kelly10975@cluster0-ebww6.gcp.mongodb.net/test?retryWrites=true&w=majority";
var User = require("./schema/user")

module.exports = () => {
    const connect = () =>{
        // client.connect(err => {
        //     const collection = client.db("test").collection("devices");
        //     // perform actions on the collection object
        //     client.close();
        //   });
        mongoose.connect(url,{ dbName:"Chiking", useNewUrlParser: true},
            async (error)=>{
                if(error){
                    console.log("몽고디비 에러")
                }else{
                    console.log("몽고디비 연결 성공")
                    // var user = new User({
                    //     id:"01041308737",
                    //     name: "최용원",
                    //     age: 20,
                    //     gender: "male",
                    //     vote: false,
                    //     chicken_name:"None",
                    //     chicken_type:"None"
                    // })
                    // user.save()
                    //init.init()
                //     var user = User.findOne({name:"최용원"}, (err, info)=>{
                //         console.dir(info)
                //    })
                }
                   }       )
    }

    connect();
    mongoose.connection.on("error", (error)=>{
        console.error("몽고디비 연결 에러", error)
    })

    mongoose.connection.on("disconnected", ()=>{
        console.error("몽고디비 연결이 끊김, 연결 재시도중")
        connect();
    })

    return mongoose;

}