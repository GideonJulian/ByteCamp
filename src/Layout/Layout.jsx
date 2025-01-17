import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
        <Outlet />
    </div>
  )
}

export default Layout