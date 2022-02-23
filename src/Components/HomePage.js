import React from 'react'
import Navbar from "./nav"
import Menubar from './menubar'
import { Outlet } from 'react-router-dom'
import { auth } from '../firebase-config'

export default function HomePage() {
  return (
    <>{
      auth.currentUser!==null? <><Navbar/>
      <Menubar/>
      <Outlet/>
      </>: <p>Login krke aao</p>
    }
    </>
  )
}
