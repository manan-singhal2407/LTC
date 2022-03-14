import React from 'react'
import "./menubar.css"
import {Link} from "react-router-dom"
import {auth} from "../firebase-config";
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Menubar() {
  const navigate = useNavigate();

  const signoutfunc=()=>{
    signOut(auth).then(() => {
      window.localStorage.clear();
      window.location.href='/'
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });

  }

  return (
    <>
      <div className="container-menubar">
        <div class="dropdown-home">
          <Link to={"/userpage/"+auth.currentUser.uid+"/home"} className='home-btn'>Home</Link>
          <div class="dropdown-content-home">
            {/* <p className='content-home'>1</p>
            <p className='content-home'>2</p> */}
          </div>
        </div>

        <div class="dropdown-forms">
          <button className='forms-btn'>Forms</button>
          <div class="dropdown-content-forms">
            <p className='content-forms'>Form1</p>
            <p className='content-forms'>Form2</p>
          </div>
        </div>

        <div class="dropdown-appl">
          <button className='appl-btn'>Application</button>
          <div class="dropdown-content-appl">
            <Link to={"/userpage/"+auth.currentUser.uid+"/previousApplication"} className='content-appl'>View Previous application</Link>
            <Link to={"/userpage/"+auth.currentUser.uid+"/newApplication"} className='content-appl'>Fresh application</Link>
          </div>
        </div>  
        <div className="rf"></div>
        <div className="signout">
          <button onClick={signoutfunc} className='signout-btn'>Sign out</button>
        </div>    
      </div>
    </>
  )
}
