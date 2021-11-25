import express from "express";
import{
    getMovieByName,
    deleteMovieById,
    deleteByQuery,
    getMovieById,
    createMovie,
    getMovieByQuery,
    updateMovieByName
  } from  "../helper.js"
const router=express.Router();

router
.route('/')
.get(async(request, response) => {
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
   })
    .delete( async(request, response) => {
   console.log(request.query);
   let filter=request.query;
  
   if(filter.rating){
     filter.rating=parseInt(filter.rating);
   }
   console.log(filter)
 
   const deletequery = await deleteByQuery(filter);
   response.send(deletequery)
  })
  .post( async(request, response) => {
    const data=request.body;
      const result = await createMovie(data);
    
    response.send(result )
    
    })
    .put(async(request, response) => {
        const {name}=request.query;
        console.log(request.query, request.body);
        const client = await updateMovieByName(name, request);
      
        const movie = await getMovieByName(name);
      response.send(movie);
      
      });
 
      router
      .route("/:id")
      .delete( async(request, response) => {
   const {id}=request.params;
  const delmovie = await deleteMovieById(id);
 
 response.send( delmovie ? delmovie : {message:"No matching"})
 
 })
 .get( async(request, response) => {
    const {id}=request.params;
   const movie = await getMovieById(id);

response.send( movie ? movie : {message:"No matching"})
  
})
 
 
 
 export const movieRouter = router;
