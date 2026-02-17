class ApiErrors extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        isOperational = true,
        errors = [],
        stack = ""

    ){
        super(message);
        this.data = null;
        this.message = message;
        this.sucess = false;
        this.errors = errors;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.stack = stack;

        if(stack){
            this.stack = stack;
    
    
            
        }
            else{
        Error.captureStackTrace(this,this.constructor);

    }

    }


}


export {ApiErrors}