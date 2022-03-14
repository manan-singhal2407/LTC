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
        const newEntry = await pool.query("INSERT INTO employee(firstname,lastname,empcode,designation,department,joindate,bandpay,leaveNature, leaveFrom, leaveTo, leaveNoOfDays, prefixFrom, prefixTo, suffixFrom, suffixTo, spouse, selfFrom, selfTo, familyFrom, familyTo, homeTown, natureOfLTC, placeName, estimatedFare, advancedRequired, encashmentRequired, encashmentDays, blockYear, ltcTable, requestStatus,day_date_submitted) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31) RETURNING*",
        [firstname,lastname,empcode,desg,dept,joindate,bandpay,leaveNature, leaveFrom, leaveTo, leaveNoOfDays, prefixFrom,
            prefixTo, suffixFrom, suffixTo, spouse, selfFrom, selfTo, familyFrom, familyTo, homeTown, natureOfLTC, placeName, 
            estimatedFare, advancedRequired, encashmentRequired, encashmentDays, blockYear, ltcTable, rs,dateTime]);
        res.json(newEntry)
    } catch (err) {
        console.error(err.message);
    }
})


//
 app.get("/getecode/:uid",async(req,res)=>{
     try {
         const{uid}=req.params;
         console.log(uid)
         const data = await pool.query("SELECT empcode from Roles where userid=$1",[uid]);
         const {empcode} = data.rows[0];
         console.log(empcode)
         res.json(data.rows[0])
     } catch (err) {
         console.error(err.message)
     }
 })

 app.get("/getdept/:uid",async(req,res)=>{
    try {
        const{uid}=req.params;
        console.log(uid)
        const data = await pool.query("SELECT department from Roles where userid=$1",[uid]);
        res.json(data.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

 app.get("/getprevious/:ecode",async(req,res)=>{
    try {
        const {ecode} = req.params; 
        const data = await pool.query("SELECT requestid,day_date_submitted,requestStatus from employee where empcode = $1 ",[ecode]);
        res.json(data.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//

 app.get("/getrole/:ema",async(req,res)=>{
    try {
        const{ema} = req.params;
        console.log(ema)
        const data = await pool.query("SELECT user_type from Roles where email=$1",[ema]);
        const {user_type} =data.rows[0]
        console.log(user_type)
        res.json(user_type)
    } catch (err) {
        console.error(err.message)
    }
})


app.get("/getapplications/:dept",async(req,res)=>{
    try {
        const{dept} = req.params;

        const data = await pool.query("SELECT firstname,day_date_submitted,requeststatus from employee where department=$1",[dept]);
        res.json(data.rows)
    } catch (err) {
        console.error(err.message)
    }
})



app.listen(5000,(()=>{
    console.log('Running on port 5000');
}))

