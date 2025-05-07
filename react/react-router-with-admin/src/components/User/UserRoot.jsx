import React from 'react'
import UserNavbar from './UserNavbar'
import UserFooter from './UserFooter'
import { Outlet } from 'react-router'

function UserRoot() {
  return (
    <>
    <UserNavbar/>
    <Outlet/>
    <UserFooter/>
    </>
  )
}

export default UserRoot