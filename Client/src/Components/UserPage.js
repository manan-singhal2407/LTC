import React from 'react'
import Navbar from "./nav"
import Menubar from './menubar'
import { Outlet } from 'react-router-dom'
import { auth } from '../firebase-config'

export default function UserPage() {
  return (
    <>{
    <><Navbar/>
      <Menubar/>
      <Outlet/>
      </>
    }
    </>
  )
}
