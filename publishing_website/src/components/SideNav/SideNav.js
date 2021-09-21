import React from 'react'
import { Link } from "react-router-dom";
import { sidebarData } from './SideBarData'
import './SideBar.css'

function SideNav() {
	return (
		<>
			<nav className='nav-menu'>
				<ul className='nav-menu-items'>					
					{/*  Create a map to display the Sidebar Data */}
					{sidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon} <span>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}

export default SideNav;
