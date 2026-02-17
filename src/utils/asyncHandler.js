const asyHandler = (requesrHandler)=>{
    (req, res,next)=>{
    Promise.resolve(requesrHandler(req,res,next)).
    catch((err)=>next(err));    
    }

}

export default asyHandler;