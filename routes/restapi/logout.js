var express = require("express")
var router = express.Router()
var User = require("../../db/schema/user")

router.post("/", (req,res)=>{
    if(req.session.logined){
        req.session.destroy();
        res.json({
            status:true,
            message:"logout complete"
        })
    }else{
        res.json({
            status:false,
            message: "not even logined"
        })
    }
})

module.exports = router;