import React from 'react'
import jsPDF from 'jspdf';
import './Userpage.css';
import Employee from './Employee';
import Ltc from './Ltc';
import Navbar from "./nav"
import { useState } from 'react';


export default function Userpage() {

  let t;
  
  let getData=(data)=>{
    t={...data}
    console.log(t);
  }
  return (
    <>
      <Navbar/>
      <div className="content">
        <Employee func={getData}/>
      </div>
    </>
    )
}





