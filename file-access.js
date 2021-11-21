const fs=require("fs");
// fs.readFile("./cool.txt","utf-8",function(err,content){
   
//    if(err){
//     console.log(err);
//    }
//     console.log(content)
// })
fs.writeFile("./awesome.txt","Good day",function(err){
    console.log("completed writing");
})
// const quote2="/n hello"
// fs.appendFile("./awesome.txt",quote2,function(err){
//     console.log("Added to the file");
// })

//  fs.unlink("./backups/text1.js",function(err){
//     console.log("Added to the file");
// })
//const htmlData="Good morning"
// for(let i=1;i<=10;i++){

fs.readFile("./backups",function(err,files){
  console.log(files)
})

// fs.writeFile(`./backups/text${i}.html`,htmlData,function(err){
//     console.log("completed writing");
// })
// }
// for(let i=1;i<=10;i++){
// fs.unlink(`./backups/text${i}.html`,function(err){
//        console.log("deleted from the file");
//      })
//     }
    fs.readdir("./backups",function(err,files){
      files.forEach((file) => {   
      fs.unlink(`./backups/${file}`,function(err){
            console.log("deleted from the file",file);
         })
    })
  });