const jwt = require('jsonwebtoken');


const authenticate = (req,res,next)=>{
    const token = req.headers.token ;
    if(token){
        const decode = jwt.verify(token,"masai");
        if(decode){
            next()
        }else{
            res.send("Please Login First");
        }
    }else{
        res.send("Please Login First");
    }
}


module.exports ={
    authenticate
}