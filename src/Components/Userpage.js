import React from 'react'
import jsPDF from 'jspdf';
import './Userpage.css';
import Employee from './Employee';
import Navbar from "./nav"
import { useState } from 'react';


export default function Userpage() {

  let t;
  let tt;
  let ttt;
  
  const getData=(data1,data2,data3)=>{
    t={...data1}
    tt={...data2}
    ttt={...data3}
    console.log(tt);
  }

  const funct=()=> {
    console.log(t,tt,ttt)
  }




  return (
    <>
      <Navbar/>
      <div className="content">
        <Employee func={getData} />
      </div>
      <button onClick={funct}>Print</button>

    </>
    )
}





