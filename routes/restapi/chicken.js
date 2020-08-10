var express = require("express")
var router = express.Router();
var Chicken = require("../../db/schema/chicken")

router.get("/:type/:name",async(req,res)=>{ //읽기
    
    if(req.params.type&&req.params.name){
        var chicken = await Chicken.findOne({type:req.params.type, name:req.params.name});
        console.log(chicken)
        res.json({status:"Ok"})
    }else if(req.params.type){
        var chicken = await Chicken.find({type:req.params.type});
        console.log(chicken)
        res.json({status:"Ok"}) 
    }else{
        var chicken = await Chicken.find();
        console.log(chicken)
        res.json({status:"Ok"})
    }
})

module.exports = router;