import { createConnection } from "./index.js";

async function updateMovieByName(name, request) {
  const client = await createConnection();
  const result = await client
    .db("b27rwd")
    .collection("movies")
    .updateOne({ name: name }, { $set: request.body });
  return client;
}

async function getMovieByName(name) {
  const client = await createConnection();

  return await client
    .db("b27rwd")
    .collection("movies")
    .findOne({ name: name });
}

async function getMovieByQuery(filter) {
  const client = await createConnection();
  const movies = await client
    .db("b27rwd")
    .collection("movies")
    .find(filter)
    .toArray();
  return movies;
}

  async function createMovie(data) {
  const client = await createConnection();
  console.log(data);
  const result = await client
    .db("b27rwd")
    .collection("movies")
    .insertMany(data);
  return result;
}
async function getMovieById(id) {
    const client = await createConnection();
    const movie = await client
      .db("b27rwd")
      .collection("movies")
      .findOne({ id: id });
    return movie;
  }
  
  async function deleteByQuery(filter) {
    const client = await createConnection();
    const deletequery = await client
      .db("b27rwd")
      .collection("movies")
      .deleteMany(filter);
    return deletequery;
  }
  
  async function deleteMovieById(id) {
    const client = await createConnection();
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