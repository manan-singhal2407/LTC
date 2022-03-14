import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { auth } from '../firebase-config';

const AdminPrevious = ()=>{


    const [data3,setdata3]=useState([]);
  const func =async()=>{
    
    const response = await fetch("http://localhost:5000/getdept/"+auth.currentUser.uid)
    const {department} =  await response.json()

    const response2 = await fetch("http://localhost:5000/getapplications/"+department)
    setdata3( await response2.json())
    console.log(data3)
  }
  let tb_0 = [...data3]
    const fill = (element,index)=>{
        return (
            <tr>
            <td>{index + 1}</td>
            <td>{element.firstname}</td>
            <td>{element.day_date_submitted}</td>
            <td>{element.requeststatus}</td>
            </tr>
        )
        }
        
    return (
        <>
        <button onClick={func}>Search</button>
        <Table striped bordered hover style={{width: "70%",marginLeft:"7.8%"}}>
        <thead>
            <tr>
            <th>Request Id</th>
            <th>Application Form</th>
            <th>Date</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {tb_0.map(fill)}
        </tbody>
        </Table>
        </>
    )        
}

export default AdminPrevious;


