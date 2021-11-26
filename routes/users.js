import express from "express";
import{genPassword,getUserByName,createUser} from  "../helper.js"
const router=express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

router
.route("/signup")
  .post( async(request, response) => {
    const {username,password}=request.body;
const isUserExist=await getUserByName(username)
console.log(isUserExist)
if(isUserExist){
    response.status(400).send({message:"username already exist"})
    return;
}
if(password.length<8){
    response.status(400).send({message:"password must be longer"})
    return;
}
if(!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#$%&*]).{8,}$/g.test(password)){
    response.status(400).send({message:"password pattern does not match"})
    return;
}
;
    const hashedPassword=await genPassword(password)
    const result=await createUser({
        username:username,
        password:hashedPassword
    })
   console.log(hashedPassword,result)
    response.send(result)
    
    })
  router.route("/login")
  .post( async(request, response) => {
    const {username,password}=request.body;
    const userFromDB=await getUserByName(username)
    console.log(userFromDB)
    if(!userFromDB){
        response.status(401).send({message:"Invalid credentials"})
        return;
    }
const storedDBPassword=userFromDB.password
   const isPasswordMatch= await bcrypt.compare(password,storedDBPassword)
if(isPasswordMatch){
    const token=jwt.sign({id:userFromDB._id},process.env.SECRET_KEY)
    response.send({message:"Successfull login",token:token})
}else{
    response.status(401).send({message:"Invalid credentials"})

}
    })
 export const userRouter = router;
