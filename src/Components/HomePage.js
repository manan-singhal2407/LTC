import React from 'react'
import Navbar from "./nav"
import Menubar from './menubar'
import { Outlet } from 'react-router-dom'

export default function HomePage() {

  
  return (
    <>
    <Navbar/>
    <Menubar/>
    <Outlet/>
    </>
  )
}
