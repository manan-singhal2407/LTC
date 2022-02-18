import React, { useState } from 'react'
import{signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase-config"
import './LoginBox.css';
const LoginBox = () => {

    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");



    const logUser=async()=>{
        try{
            const user = await signInWithEmailAndPassword(auth,email,password);
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
                    <input className="button" type="button" onClick={logUser} value="Login" />
                </form>
            </div>
        </div>
        </>
    );
};

export default LoginBox;