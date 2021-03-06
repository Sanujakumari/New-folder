// const express = require("express");
import dotenv from "dotenv" ;

import express from "express";
import { MongoClient } from "mongodb";

import { movieRouter } from "./routes/movie.js";
import { userRouter } from "./routes/users.js";
import bcrypt from "bcrypt";
import cors from "cors";

dotenv.config();
console.log(process.env)
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 9000;
const MONGO_URL=process.env.MONGO_URL;
// const MONGO_URL="mongodb://localhost"

 async function createConnection(){
  const client=new MongoClient(MONGO_URL);
await client.connect()
console.log("Mongodb Connected")

return client;
}
  const client = await createConnection();


app.get("/", (request, response) => {
  response.send("Hello world  🌎");
});

app.use('/movies',movieRouter);
app.use('/users',userRouter);


app.listen(PORT, () => console.log("The server is started in ", PORT));


export {client}

async function genPassword(password){
  const salt=await bcrypt.genSalt(10);
console.log(salt);
  const hashedPassword=await bcrypt.hash(password,salt)
console.log(hashedPassword)
}
genPassword("password123")
