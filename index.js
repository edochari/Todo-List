const express=require("express");
const port=8050;
const app=express();

app.set('view engine','ejs');
app.set('views','./views');
app.get('/',function(req,res){
    return res.render('home',{title:'Todo List'});
})

app.listen(port,function(err){
    if(err){
        console.log("Error while starting server");
        return ;
    }
    console.log(`server is up and running : ${port}`)
})