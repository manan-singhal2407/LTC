const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/",async(req,res)=>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    var rs = "";
    rs = rs.concat("(status:submit,dateTime:", dateTime, ")");
    try {
        const {firstname,lastname,empcode,desg,dept,joindate,bandpay,leaveNature, leaveFrom, leaveTo, leaveNoOfDays, prefixFrom,
            prefixTo, suffixFrom, suffixTo, spouse, selfFrom, selfTo, familyFrom, familyTo, homeTown, natureOfLTC, placeName, 
            estimatedFare, advancedRequired, encashmentRequired, encashmentDays, blockYear, ltcTable}= req.body;
        console.log(req.body);
        const newEntry = await pool.query("INSERT INTO employee(firstname,lastname,empcode,designation,department,joindate,bandpay,leaveNature, leaveFrom, leaveTo, leaveNoOfDays, prefixFrom, prefixTo, suffixFrom, suffixTo, spouse, selfFrom, selfTo, familyFrom, familyTo, homeTown, natureOfLTC, placeName, estimatedFare, advancedRequired, encashmentRequired, encashmentDays, blockYear, ltcTable, requestStatus) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30) RETURNING*",
        [firstname,lastname,empcode,desg,dept,joindate,bandpay,leaveNature, leaveFrom, leaveTo, leaveNoOfDays, prefixFrom,
            prefixTo, suffixFrom, suffixTo, spouse, selfFrom, selfTo, familyFrom, familyTo, homeTown, natureOfLTC, placeName, 
            estimatedFare, advancedRequired, encashmentRequired, encashmentDays, blockYear, ltcTable, rs]);
        res.json(newEntry)
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000,(()=>{
    console.log('Running on port 5000');
}))
