import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from '../firebase-config';

const PreviousApp = ()=>{

const [data3,setdata3]=useState([]);
const [emp,setemp]=useState(0);

  const func =async ()=>{
    // console.log("hello")

    const response = await fetch("http://localhost:5000/getecode/"+auth.currentUser.uid)
    const {empcode} =  await response.json()
    setemp(empcode)
    console.log(empcode);

    const str = "http://localhost:5000/getprevious/"+empcode
    console.log(str)

    const response2 = await fetch("http://localhost:5000/getprevious/"+empcode)
    setdata3( await response2.json())
    console.log(data3)
  }

  
  
  var current = new Date();
  var date = current.getDate() + '-' + (current.getMonth()+1) + '-' + current.getFullYear();
  var dt = date.toString();
  let tb = [...data3]
  
  const filltable = (element, index)=>{
    return (
      <tr>
        <td>{element.requestid}</td>
        <td>{element.day_date_submitted}</td>
        <td>{element.requeststatus}</td>
      </tr>
    )
  }
  return(
    <div className='container'>
      <button onClick={func}>Search</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Request Id</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tb.map(filltable)}
        </tbody>
      </Table>
    </div> 
  );
}
export default PreviousApp;
