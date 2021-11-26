import { client } from "./index.js";
import bcrypt from "bcrypt";

async function updateMovieByName(name, request) {
  const result = await client
    .db("b27rwd")
    .collection("movies")
    .updateOne({ name: name }, { $set: request.body });
  return result;
}

async function getMovieByName(name) {

  return await client
    .db("b27rwd")
    .collection("movies")
    .findOne({ name: name });
}

async function getMovieByQuery(filter) {
  const movies = await client
    .db("b27rwd")
    .collection("movies")
    .find(filter)
    .toArray();
  return movies;
}

  async function createMovie(data) {
  console.log(data);
  const result = await client
    .db("b27rwd")
    .collection("movies")
    .insertMany(data);
  return result;
}
async function getMovieById(id) {
      const movie = await client
      .db("b27rwd")
      .collection("movies")
      .findOne({ id: id });
    return movie;
  }
  
  async function deleteByQuery(filter) {
      const deletequery = await client
      .db("b27rwd")
      .collection("movies")
      .deleteMany(filter);
    return deletequery;
  }
  
  async function deleteMovieById(id) {
      const delmovie = await client
      .db("b27rwd")
      .collection("movies")
      .deleteMany({ id: id });
    return delmovie;
  }
  async function genPassword(password){
    const salt=await bcrypt.genSalt(10);
  // console.log(salt);
    const hashedPassword=await bcrypt.hash(password,salt)
  return hashedPassword
  }
  async function getUserByName(username) {

    return await client
      .db("b27rwd")
      .collection("users")
      .findOne({ username: username });
  }
  async function createUser(data) {
    const result = await client
      .db("b27rwd")
      .collection("users")
      .insertOne(data);
    return result;
  }
  export{
    getMovieByName,
    deleteMovieById,
    deleteByQuery,
    getMovieById,
    createMovie,
    getMovieByQuery,
    updateMovieByName,
    genPassword,
    getUserByName,
    createUser
  }