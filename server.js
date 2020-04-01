
const express=require("express");
const bodyParser=require("body-parser")
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendfile(__dirname+"/calc.html");
})
app.post("/",function(req,res){
  var a=Number(req.body.name1);
  var b=Number(req.body.name2);
  res.send("the result is"+(a+b));
})
app.listen(1000,function(){
  console.log("server is running");
})
