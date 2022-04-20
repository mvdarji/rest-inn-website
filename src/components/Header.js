import '../assets/css/Header.css';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useState, useEffect} from 'react';

const Header = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [menuLinks, setMenuLinks] = useState([
		{
			to: '/properties',
			text: 'Vacation Properties'
		},
		{
			to: '/signup',
			text: 'Sign Up'
		}
	]);
	let links = [];

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));		
		if(user === null){
			links = [
				{
					to: '/login',
					text: 'Log In'
				}
			];
		}else{
			const userFirstName = user.firstName;
			links = [
				{
					to: '/logout',
					text: 'Log out'
				},
				{
					to: '/dashboard',
					text: `Hello, ${userFirstName.charAt(0).toUpperCase()}${userFirstName.slice(1)}!`
				}
			];
		}
		setMenuLinks([...menuLinks, ...links]);
	}, []);

	// toggle search bar
	const toggleSearch = (e) => {
		e.preventDefault();
		document.getElementById('search-bar-wrap').classList.toggle('mob-hide');
	}

	// toggle menu dropdown
	const toggleDropdown = (e) => {
		e.preventDefault();
		document.getElementById('dropdown-links').classList.toggle('hide');
	}
	
	// search results
	const getSearchResults = (e) => {
		const searckKW = e.target.value;
		setSearchTerm(searckKW);

		const ulNode = document.getElementById('search-results');
		ulNode.innerHTML = '';

		if( searckKW !== ''){
			fetch(`${process.env.REACT_APP_API_URI}/properties/search?searchTerm=${searckKW}`)
			.then( resp => resp.json())
			.then( data => {
				data.forEach(prop => {
					let liNode = `<li>
						<a href="/properties/${prop.id}">
							${prop.title}
						</a>
					</li>`;
					ulNode.innerHTML += liNode;
				});
			})
			.catch( error => {
				console.log(error);
				ulNode.innerHTML = `<li class="no-results-li">No Results found for '<b>${searckKW}</b>'</li>`;
			});
		}
	}

    return(
        <header>
			<div className="container">
				<div className="header-wrap">
					<h1 className="logo">
						<Link to='/'>Rest-Inn</Link>
					</h1>

					<div id="search-bar-wrap" className="mob-hide">
						<input 
							className="search-inputbox" 
							placeholder="Search by property title" 
							value={searchTerm}
							onChange={ e => { getSearchResults(e) }}
						/>
						<button>
							<FaSearch className="fa" />
						</button>
						<ul id="search-results"></ul>
					</div>
				
					<a href='/' className='search-icon-btn mob-show' onClick={toggleSearch}><FaSearch className="fa" /></a>

					<div className="header-links-wrap">
						<Link to='/properties' className='mob-hide'>Vacation Properties</Link>
						<a href='/' className='user-icon-btn icon-btn' onClick={toggleDropdown}><FaUser className="fa" /></a>
						<ul id="dropdown-links" className="hide">
							{menuLinks.map( (link, i) => (
								<li key={i} className={(i === 0) ? 'mob-show': ''}>
									<Link to={link.to}>{link.text}</Link>
								</li>
							))}
						</ul>					
					</div>
				</div>
			</div>
		</header>
    )
}

export default Header;