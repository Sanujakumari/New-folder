import express from "express";
import{
    genPassword
  } from  "../helper.js"
const router=express.Router();

router
.route("/signup")
  .post( async(request, response) => {
    const {username,password}=request.body;
    //   const result = await createUser(data);
    const hashedPassword=await genPassword(password)
    response.send({username:username,password:hashedPassword})
    
    })
  
 export const userRouter = router;
