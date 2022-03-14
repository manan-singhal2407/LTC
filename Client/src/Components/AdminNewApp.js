import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { auth } from '../firebase-config';

export default function AdminNewApp() {

  const [data3,setdata3]=useState([]);
  const func =async()=>{
    
    const response = await fetch("http://localhost:5000/getdept/"+auth.currentUser.uid)
    const {department} =  await response.json()

    const response2 = await fetch("http://localhost:5000/getapplications/"+department)
    setdata3( await response2.json())
    console.log(data3)
  }




    var current = new Date();
  var date = current.getDate() + '-' + (current.getMonth()+1) + '-' + current.getFullYear();
  var dt = date.toString();
  let tb =[]
    // let obj = {id: 2, application: "any", date: dt, status: "Pending"}
    tb = [...data3]
    const filltable = (element, index)=>{
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{element.firstname}</td>
            <td>{element.day_date_submitted}</td>
            <td>{element.requeststatus}</td>
            <td style={{display: "flex",columnGap:"10%"}}><Button variant="success" size="sm">Approve</Button><Button variant="danger" size="sm">Reject</Button></td>
          </tr>
        )
      }
    return (
      <>
      <button onClick={func} >Search</button>
        <Table striped bordered hover style={{width: "70%",marginLeft:"7.8%"}}>
          <thead>
            <tr>
              <th>Request Id</th>
              <th>Application Form</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tb.map(filltable)}
          </tbody>
        </Table>
        </>
      );
}
