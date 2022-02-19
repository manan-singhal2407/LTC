import React,{useState} from 'react'
import {sendPasswordResetEmail}from "firebase/auth";
import {auth} from "../firebase-config";
import "./LoginBox.css"
import Navbar from './nav';

const ForgotPassBox=()=>{

const [email,setemail]=useState("");


const getlink=()=>{
    if(email !==""){
        sendPasswordResetEmail(auth,email);
    }
    else{
        alert("Enter valid email")
    }
}

return(
    <>
    <Navbar/>
    <div className="container">
        <div className="box">
            <div className="heading">
                Recover Account 
            </div>
            <form >
                <input className="uname" placeholder="Email" type="email" onChange={(e)=>{setemail(e.target.value)}}/>
                <br />
            </form>
            <div>
            <button className="button" onClick={getlink}>Send verification link</button>
            </div>
        </div>
    </div>
    </>
);
};

export default ForgotPassBox