import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
			<h1 className="logo">
				<Link to='/'>LOGO</Link>
			</h1>

			<Link to='properties'>Vacation Properties</Link> | 
			<Link to='signup'>Sign Up</Link> | 
			<Link to='login'>Log In</Link>
		</header>
    )
}

export default Header;