// const express = require('express');
// const product = express();

// product.get("/api/getCategories",(req,res)=>{

//     let appData={
//         isError :false,
//         data:[]
//     };
//     res.status(204).json(appData);
// });
// module.exports = product;

const express = require('express');
const product = express.Router();
const database = require("../Database");


product.get("/getCategories",(req,res)=>{

    let appData={
        isError : false,
        data:[]
    };
    database.connection.getConnection((err,connection)=>{
        if(err){
            appData.isError = true;
            appData.data = err;
            res.status(500).json(appData);
        }else{
            connection.query("Select * from categories",(error,rows)=>{
                if(error){
                    appData.isError = true;
                    appData.data = err;
                    res.status(500).json(appData); //data will be send to the client
                }
                else{
                    appData.data=rows;
                    res.status(200).json(appData);
                }
            });
            connection.release();

        }
    })

})

product.get("/getProducts",(req,res)=>{

    let appData={
        isError : false,
        data:[]
    };
    database.connection.getConnection((err,connection)=>{
        if(err){
            appData.isError = true;
            appData.data = err;
            res.status(500).json(appData);
        }else{
            connection.query("Select * from product",(error,rows)=>{
                if(error){
                    appData.isError = true;
                    appData.data = err;
                    res.status(500).json(appData); //data will be send to the client
                }
                else{
                    appData.data=rows;
                    res.status(200).json(appData);
                }
            });
            connection.release();

        }
    })


})

module.exports = product;