import React from 'react'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Category from './Category'
import Playstore from './Playstore'

function DashBoard() {
  return (
    <div >
        <Header/>
        <About/>
        <Category/>
        <Playstore/>
        <Footer/>


    </div>
  )
}

export default DashBoard