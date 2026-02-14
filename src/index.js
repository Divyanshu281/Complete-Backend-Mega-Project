import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import {app} from "./app.js"



dotenv.config({
    path: './.env',
    debug: false
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening at port: ${process.env.PORT}`);   
    })
})
.catch((error)=>{
    console.log("Error in connecting to DB", error);
    process.exit(1)
})  










// import express from "express"
// app = express();


// (
//    async () =>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`)
//         console.log("Connected to DB");
//         app.on("Error", (error)=>{
//             console.log("Error", error);
//             throw error;
            
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening at port: ${process.env.PORT}`);
            
//         })
        

//     }
//     catch(error){
//         console.log("Connection Failed",error);

//     }
// }
// )()