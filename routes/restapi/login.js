var express = require("express")
var router = express.Router()
var User = require("../../db/schema/user")

router.post("/", async(req,res)=>{
    var phonenum = req.body.phonenum;
    var pw = req.body.pw;
    var user_data = await User.findOne({id:phonenum})
    if(user_data!=null){
        var data = user_data._doc
        if(pw==data.pw){
            req.session.logined = true;
            res.json({
                status:true,
                message: "login successfully"
            })
        }else{
            res.json({
                status: false,
                message: "login fail"
            })
        }
    }else{
        res.json({
            status:false,
            message: "user not found"
        })
    }
})

module.exports = router