import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { sidebarData } from './SideBarData'
import './SideBar.css'

function SideNav() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => { setSidebar(!sidebar); };

	return (
		<>
			<nav 
				className={ sidebar ? 'nav-menu.active' : 'nav-menu' } 
				onMouseEnter={showSidebar}
				onMouseLeave={showSidebar}
			>
				<ul className='nav-menu-items'>					
					{/*  Create a map to display the Sidebar Data */}
					{sidebarData.map((item, index) => {
						return (
							<li key={index} className={sidebar ? item.cName : item.cNameHide}>
								<Link to={item.path}>
									{item.icon}
									<span>{sidebar ? item.title : ''}</span>
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
