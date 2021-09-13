import React from 'react'
import '../../static/site.css'

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByClassName("scrolling-header").style.fontSize = "30px";
    } else {
        document.getElementsByClassName("scrolling-header").style.fontSize = "90px";
    }
}

function ScrollingHeade() {
    window.onscroll = function() {scrollFunction()};
    return (
        <div className='scrolling-header'>
            Accounts of the Occult
        </div>
    )
}

export default ScrollingHeade
