const app = require("express")()

//Alternative
// const express = require("express")
// const app = express()


//req -request , res-response

app.get("/",(req,res)=>{
    
  
    res.json({
        message: "hello",
        status: "studet"

    })
})

app.get("/contact",(req,res)=>{
   res.json({
    message:"you are in contact page"
   })
})

app.get("/about",(req,res)=>{
    res.json({
        message: "you are in about page",
        
    })
})

//2000 number ko room use gar yo project run garnalie
app.listen(3000,(req,res)=>{
    console.log("node js has started at port 3000")
})
