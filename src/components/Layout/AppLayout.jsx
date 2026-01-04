import React from 'react'
import { Outlet } from 'react-router-dom'
import { Headers } from '../UI/Headers.jsx'
import Footer from '../UI/Footer.jsx'

 export const AppLayout = () => {
  return (
    <div>
        <Headers />
        <Outlet />
        <Footer />
    </div>
  )
}
