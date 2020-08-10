module.exports = {
    logined: async(req,res,next)=>{
        if(req.session.logined){
            next()
        }else{
            res.json({
                status: false,
                message:"not logined"
            })
        }
    }
}