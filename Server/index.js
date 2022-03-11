const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());


// Routes

 app.post("/",async(req,res)=>{
    try {
        const {firstname,lastname,empcode,desg,dept,joindate,bandpay}= req.body;
        console.log(req.body);
        const newEntry = await pool.query("INSERT INTO employee(firstname,lastname,empcode,designation,department,joindate,bandpay) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING*",
        [firstname,lastname,empcode,desg,dept,joindate,bandpay]);
        res.json(newEntry)
    
    } catch (err) {
        console.error(err.message);
    }
 })


app.listen(5000,(()=>{
    console.log('Running on port 5000');
}))

