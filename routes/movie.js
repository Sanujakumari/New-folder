import express from "express";
const router=express.Router();
router.get("/movies", async(request, response) => {
    console.log(request.query);
    let filter=request.query;
   
    if(filter.rating){
      filter.rating=parseInt(filter.rating);
    }
    console.log(filter)
 
    const movies = await getMovieByQuery(filter);
   //  console.log(movies)
    response.send(movies)
 
    //Query is for filtering
   //  const movlang=movies.filter((mv)=>mv.language===language)
    // response.send( movlang ? movlang : {});
   });
   router.get("/movies/:id", async(request, response) => {
     const {id}=request.params;
    const movie = await getMovieById(id);
 
 response.send( movie ? movie : {message:"No matching"})
   
 });
 router.delete("/movies", async(request, response) => {
   console.log(request.query);
   let filter=request.query;
  
   if(filter.rating){
     filter.rating=parseInt(filter.rating);
   }
   console.log(filter)
 
   const deletequery = await deleteByQuery(filter);
   response.send(deletequery)
  });
  router.delete("/movies/:id", async(request, response) => {
   const {id}=request.params;
  const delmovie = await deleteMovieById(id);
 
 response.send( delmovie ? delmovie : {message:"No matching"})
 
 });
 router.put("/movies", async(request, response) => {
   const {name}=request.query;
   console.log(request.query, request.body);
   const client = await updateMovieByName(name, request);
 
   const movie = await getMovieByName(name);
 response.send(movie);
 
 });
 
 router.post("/movies", async(request, response) => {
 const data=request.body;
   const result = await createMovie(data);
 
 response.send(result )
 
 });
 
 export const movieRouter = router;
