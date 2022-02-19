import React,{useRef} from 'react'
// import * as React from 'react';
import TextField from '@mui/material/TextField';
import { border, fontSize } from '@mui/system';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Ltc from './Ltc';
import Navbar from './nav';
import {useReactToPrint} from "react-to-print"
import ReactDOMServer from "react-dom/server";
import jsPDF from 'jspdf';
import FormPage from './Form';



export default function Userpage() {
    const [value, setValue] =React.useState(null);
    // const [value, setValue] =useState(null);
    // const [value, setValue] =useState(null);
    // const [value, setValue] =useState(null);
    // const [value, setValue] =useState(null);
    // const [value, setValue] =useState(null);
    // const [value, setValue] =useState(null);
    // const [value, setValue] =useState(null);
    const func=()=>{
        var doc = new jsPDF('landscape','px','a4','false');
        doc.text("hello",20,20);
        doc.save("name.pdf")
    }

  return (
    <>
    <FormPage/>
    <button onClick={func}>Print</button>
    </>
  )
}





