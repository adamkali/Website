import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaWindowClose } from 'react-icons/fa'
import { sidebarData } from './SideBarData'
import './SideBar.css'

function SideNav() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div>
				<Link to="#" className='menu-bars'>
					<FaBars onClick={showSidebar}/>
				</Link>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items'>
					<li>
						<Link to='#' className='menu-bars'>
							<FaWindowClose onClick={showSidebar} />
						</Link>
					</li>
					{/*  Create a map to display the Sidebar Data */}
					{sidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}

export default SideNav
