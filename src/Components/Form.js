import * as React from 'react';
import './Form.css';
import Employee from './Employee';
import Ltc from './Ltc';

function FormPage() {
  return (
  <div className='container'>
    <div className='header'>
      <img id ="logo_" src={'http://www.iitrpr.ac.in/sites/default/files/image.jpg'}/>
      <div className='ins_name'>
        <h2 style={{marginBottom: "0"}}>भारतीय प्रौद्योगिकी संस्थान रोपड़</h2>
        <h2 style={{marginBottom: "0"}}>INDIAN INSTITUTE OF TECHNOLOGY, ROPAR</h2>
      </div>
    </div>
    <b><hr style={{background:"black",height: "5",width:"100%"}}/></b>
    <h2 style={{marginBottom: "0", marginTop: "0",fontFamily: "Arial",textAlign:"center"}}><u>APPLICATION FOR LEAVE TRAVEL CONCESSION</u></h2>
    <div className='content'>
    <Employee/>
    <Ltc/>
    </div>
  </div>)
}
export default FormPage;