var express = require("express")
var router = express.Router()
var auth = require("../../middleware/auth")
var User = require("../../db/schema/user")
var Chicken = require("../../db/schema/chicken")

router.post("/", auth.logined, async(req,res)=>{
    
    var user = await User.findOne({id:req.session.user.id})
    
    if(!user.vote){
        await Chicken.updateOne({name: req.body.chicken_name, type: req.body.chicken_type },{$push:{like:mongoose.Types.ObjectId(info._id)},$inc:{like_count:1}}).exec()
        await User.updateOne({id:req.session.user.id},{$set:{chicken_name:req.body.chicken_name, chicken_type: req.body.chicken_type, vote: true}}).exec()
        res.json({
            status:true,
            message: "vote complete"
        })
    }else{
        res.json({
            status:false,
            message:"already vote"
        })
    }
    
})

module.exports = router;