import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
export default function Applayout() {
  return (
    <div className='h-screen'>
      <div>
         <Navbar />
      </div>

      <main>
        <Outlet />
      </main>
      

      
    </div>
  )
}
