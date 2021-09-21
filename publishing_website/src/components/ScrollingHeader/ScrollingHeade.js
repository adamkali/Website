import React from 'react'
import { Link } from 'react-router-dom'
import SideNav from "../SideNav/SideNav";
import '../../static/site.css'

function ScrollingHeade() {
  return (
    <div className='scrolling-header'>
      <Link to='/' className='header-text'>
        Accounts of the Occult
      </Link>
      <SideNav/>
    </div>
  )
}

export default ScrollingHeade
