var express = require("express")
var router = express.Router()
var User = require("../../db/schema/user")

router.get("/",(req,res)=>{ //읽기
    
})

router.post("/",async(req,res)=>{ //추가
    var user_data = await User.findOne({id:req.body.phone});
    if(user_data==null){
        var user = new User({
            id:req.body.phone,
            pw:req.body.pw,
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            vote: false,
            chicken_name:"None",
            chicken_type:"None"
        })
        user.save()
        res.json({
            status:true,
            message:"user registration complete"
        })
    }else{
        res.json({
            status:false,
            message: "user already exists"
        })
    }
})

// router.put("/user",(req,res)=>{ //업데이트
    
// })

// router.delete("/user",(req,res)=>{ //삭제
    
// })

module.exports = router;