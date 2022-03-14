import React from 'react'
import Navbar from './nav'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

export default function AdminPage() {
  return (
    <>
    <Navbar/>
    <AdminNavbar/>
    <Outlet/>
    </>
  )
}
