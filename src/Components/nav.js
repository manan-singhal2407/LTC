import React,{useState} from 'react';
import { Link } from "react-router-dom";
import './NavbarElements.css';


const Navbar = () => {

  let [Text,setText]=useState("Register");
  let [path,setpath]=useState("/register");


  const hello =()=>{
    if(Text==="Register" && path ==="/register"){
      setText("Login")
      setpath("/")
    }
    else{
      setText("Register")
      setpath("/register")
    }
    console.log(Text,path);
  }
  
  return (
    <>
      <div className="header">
        <img className="logo" src="https://www.iitrpr.ac.in/sites/default/files/logo_0_2.png" alt="" />
        <div className="Name">
            <div className="colname">Indian Institute of Technology Ropar</div>
            <div className="hiname">भारतीय प्रौद्योगिकी संस्थान रोपड़</div>
        </div>
        <div className="ltc">
            Leave/Travel Concession
        </div>
        <div className="f1"></div>
        <Link className='logbtn' to={path} onClick={hello}>{Text}</Link>
          {/* <div className="reg">
            <Link className='regbtn' to ="/register">Register</Link>
          </div> */}
        </div>
    </>
  );
};
  
export default Navbar;