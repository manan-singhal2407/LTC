import React,{useRef} from 'react'
// import * as React from 'react';
import TextField from '@mui/material/TextField';
import { border, fontSize } from '@mui/system';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import "./userpage.css"
import Ltc from './Ltc';
import Navbar from './nav';
import {useReactToPrint} from "react-to-print"
import ReactDOMServer from "react-dom/server";
import jsPDF from 'jspdf';



export default function Userpage() {
    const [value, setValue] = React.useState(null);
    const func=()=>{
        var doc = new jsPDF('landscape','px','a4','false');
        doc.save("name.pdf")
    }

  return (
    <>
    <Navbar/>
    <div className='employee_details'>
            <h2 style={{margin:"10px", border: "2px solid rgb(45, 131, 212)",borderRadius: "5px",color: "White",background: "rgb(45, 131, 212)",padding: "7px",width:"fit-content"}}>Employee Details</h2>
            <div className='name_code'>
                <p style={{fontSize: "19px"}}>Employee Name  Code:</p>
                <TextField id="outlined-basic" label="First Name" size='small' variant="outlined" />
                <TextField id="outlined-basic" label="Last Name" size='small' variant="outlined" />
                <TextField id="outlined-basic" label="Employee Code" size='small' variant="outlined" />
            </div>
            <div className='des_dep'>
                <p style={{fontSize: "19px"}}>Designation  Department:</p>
                <TextField id="outlined-basic" label="Designation" size='small' variant="outlined" />
                <TextField id="outlined-basic" label="Department" size='small' variant="outlined" />
                
            </div>
            <div className='joining'>
                <p style={{fontSize: "19px", width: "350px"}}>Date of entering the Central Government Service/Date of Joining with IIT Ropar:</p>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date of Joining"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField size='small' {...params} />}
                    />
                </LocalizationProvider>
                <p style={{fontSize: "19px", marginLeft: "50px"}}>Band Pay + AGP/GP:</p>
                <TextField id="outlined-basic" label="₹" size='small' variant="outlined" />
            </div>
        </div>
        <Ltc/>
        <button onClick={func}>Print</button>
    </>
  )
}





