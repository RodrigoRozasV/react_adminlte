import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './Header'
import Aside from './Aside'
import Content from './Content'
import Footer from './Footer'


const Layout = () => {
  return (
    <div className='wrapper'>
        <Header />
        <Aside />
        <main><Outlet /></main>
        <Footer />
    </div>
  )
}

export default Layout