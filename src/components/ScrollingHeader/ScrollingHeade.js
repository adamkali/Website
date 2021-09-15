import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../static/site.css'

function ScrollingHeade() {
  return (
    <div className='scrolling-header'>
      <Link to='/' className='header-text'>
        Accounts of the Occult
      </Link>
    </div>
  )
}

export default ScrollingHeade
