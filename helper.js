import { client } from "./index.js";

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

  export{
    getMovieByName,
    deleteMovieById,
    deleteByQuery,
    getMovieById,
    createMovie,
    getMovieByQuery,
    updateMovieByName
  }