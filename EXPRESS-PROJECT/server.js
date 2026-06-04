//express js import
const express = require('express');

//old value
let products = [
    {id:1,name:"laptop",price:6700},
    {id:2,name:"tab",price:670},
    {id:3,name:"mobile",price:67000},

];
//express js call
const app = express();
app.use(express.json());
//create server
app.get('/',(req,res)=>{
    res.send(" this is home page");
});
//data insert
app.post('/products',(req,res)=>{
    const {name,price} = req.body;
    //new value
    const newproduct = {
        id:Date.now(),
        name,
        price,
    };
    products = [...products,newproduct];
    res.json(newproduct);
});

//data all view
app.get('/products',(req,res)=>{
    res.send(products);
});
//singel view
app.get('/products/:id',(req,res)=>{
    const id = Number(req.params.id);
    const product = products.find(x=>x.id === id);
    res.send(product);
});
//define port
const port = 5500;
//how to run port (listen method)
app.listen(port,()=>{
    console.log("server is running port 5500");
})


