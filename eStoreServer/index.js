// const express=require('express')
// const app = express();

// const product = require('./Routes/product');
// app.use("/product/api/",product);                                  //for load the route used use , endpoint we created 

// const PORT=5000;
// const server = app.listen(PORT,()=>{
//     console.log("App is running on port " + PORT);
// })

const express=require('express');
const app = express();
const cors=require('cors');

app.use(cors());

const product = require('./Routes/product');
app.use("/product/api/",product);

app.use("/",express.static("Uploads"));


const PORT=5000;
const server = app.listen(PORT,()=>{
    console.log("App is running on port - " + PORT);
})