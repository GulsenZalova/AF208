import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminFooter from './AdminFooter'
import { Outlet } from 'react-router'

function AdminRoot() {
  return (
 <>
    <AdminNavbar/>
    <Outlet/>
    <AdminFooter/>
 </>
  )
}

export default AdminRoot