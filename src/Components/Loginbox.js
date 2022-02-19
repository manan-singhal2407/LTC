import React, { useState } from 'react'
import { Link } from "react-router-dom";
import{getAuth, signInWithEmailAndPassword, sendEmailVerification} from "firebase/auth"
import {auth} from "../firebase-config"
import './LoginBox.css';
import Navbar from './nav';
//import {toast} from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//toast.configure()

const LoginBox = () => {

    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    

    const logUser=async()=>{
        try{
            const user = await signInWithEmailAndPassword(auth,email,password)
            .then(() => {
                if (getAuth().currentUser.emailVerified) {
                    console.log("Email verified send to next page")
                }
                else {
                    
                    sendEmailVerification(getAuth().currentUser)
                    .then(() => {
                        console.log("Email verification link send")
                    })
                    .catch((error) => {
                        console.log("Error: In verification link:", error.code, error.message)
                    });
                    alert("Email not verified send new snkjhdjvxh")
                }
            })
            .catch((error) => {
                alert(error.message)
            });
            console.log(user)
        } catch(error){
                alert(error);
                console.log(error.message);
        }
    }

    const showPass = ()=>{
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } 
        else {
            x.type = "password";
        }
    }


    return (
        <>
        <Navbar/>

        <div className="container">
            <div className="box">
                <div className="heading">
                    Login
                </div>
                <form> 
                    <input className="uname" placeholder="Email" type="email"  onChange={(e)=>{setemail(e.target.value)}}/>
                    <br />
                    <input className="pass" type="password" id ="myInput" placeholder='Password'maxLength={16} minLength={6}  onChange={(e)=>{setpassword(e.target.value)}}></input>
                    <br />
                    <label className='showP'><input  type="checkbox" onClick={showPass} />Show Password </label>
                    <br />
                </form>
                <div className='buttondiv'>
                <button className="button"  onClick={logUser}>Login</button>
                </div>
                <div className='fpassdiv'>
                <Link className='fpass' to="/forgotpassword">forgot password?</Link> 
                </div>
                <div className='reglinkdiv'>
                <Link className='reglink'to="/register" >Create new account</Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default LoginBox;