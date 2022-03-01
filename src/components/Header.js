import '../assets/css/Header.css';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Header = () => {
	const toggleSearch = (e) => {
		e.preventDefault();
		document.getElementById('search-bar-wrap').classList.toggle('mob-hide');
	}

	const toggleDropdown = (e) => {
		e.preventDefault();
		document.getElementById('dropdown-links').classList.toggle('hide');
	}

    return(
        <header>
			<div className="container">
				<div className="header-wrap">
					<h1 className="logo">
						<Link to='/'>Rest-Inn</Link>
					</h1>

					<div id="search-bar-wrap" className="mob-hide">
						<input className="search-inputbox" placeholder="Search Here.." />
						<button>
							<FaSearch className="fa" />
						</button>
					</div>
				
					<a href='#' className='search-icon-btn mob-show' onClick={toggleSearch}><FaSearch className="fa" /></a>

					<div className="header-links-wrap">
						<Link to='properties' className='mob-hide'>Vacation Properties</Link>
						<a href='#' className='user-icon-btn icon-btn' onClick={toggleDropdown}><FaUser className="fa" /></a>
						<ul id="dropdown-links" className="hide">						
							<li><Link to='signup'>Sign Up</Link></li>
							<li><Link to='login'>Log In</Link></li>
							<li className='mob-show'><Link to='properties'>Vacation Properties</Link></li>
						</ul>					
					</div>
				</div>
			</div>
		</header>
    )
}

export default Header;