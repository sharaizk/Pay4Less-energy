import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import normalLogo from '../../assets/images/logos/logo.svg';
import stickyLogo from '../../assets/images/logos/logo-colored.svg';

const HeaderStyleTwo = (props) => {
	const { headerClass, headerNormalLogo, headerStickyLogo } = props;

	const [menuOpen, setMenuOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false);	

    const location = useLocation();

	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<React.Fragment>
			<div className={headerClass ? headerClass : 'ras-header ras-header-1'}>
				<div className={isVisible ? 'menu-bar menu-sticky sticky' : 'menu-bar menu-sticky'}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-2">
								<div className="logo">
									{
										isVisible ? 
										<Link to="/">
											<img src={headerStickyLogo ? headerStickyLogo : stickyLogo} alt="" />
										</Link> :
										<Link to="/">
											<img src={headerNormalLogo ? headerNormalLogo : normalLogo} alt="" />
										</Link>
									}
								</div>
							</div>
							<div className="col-lg-10 relative">
								<nav className="ras-main-menu">
									<ul className={menuOpen ? "nav-menu menu-open" : "nav-menu"}>
										<li className={location.pathname === '/' ? 'active' : ''}>
											<Link to="/home">Home</Link>
										</li>
										<li className={location.pathname === '/about' ? 'active' : ''}>
											<Link to="/about">About</Link>
										</li>
										<li className={location.pathname === '/contact' ? 'active' : ''}>
											<Link to="/contact">Contact</Link>
										</li>
										<li className={location.pathname === '/contact' ? 'active' : ''}>
											<Link to="/service">Services</Link>
										</li>
										<li className={location.pathname === '/contact' ? 'active' : ''}>
											<Link to="/contact">FAQs</Link>
										</li>
										<li><Link to="/contact">Get a Qoute</Link></li>
									</ul>
									<button class={menuOpen ? "mobile-menu-icon open" : "mobile-menu-icon"} aria-label="Main Menu Icon" onClick={() => {setMenuOpen(!menuOpen)}}>
										<span></span>
										<span></span>
										<span></span>
									</button>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default HeaderStyleTwo;