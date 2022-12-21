const express=require("express");
const port=8050;
const app=express();

const db=require("./config/mongoose");
const todo=require("./models/todo");

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',function(req,res){

    return res.render('home',{title:'Todo List'});
})

app.post("/create-task",function(req,res){
    todo.create({
        task:req.query.task,
        category:req.query.category,
        date:req.query.date
    },function(err,newtask){
        if(err){
            console.log("Error exists while creating task");
            return ;
        }
        console.log("*******",newtask);
        return res.redirect("back");
    })
})

app.listen(port,function(err){
    if(err){
        console.log("Error while starting server");
        return ;
    }
    console.log(`server is up and running : ${port}`)
})