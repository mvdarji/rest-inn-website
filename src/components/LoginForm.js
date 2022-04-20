import {Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

const LoginForm = () => {
	const navigate = useNavigate();
	// all fields state varibales and respective error variables
	const [email, setemail] = useState('');
	const [erroremail, setErroremail] = useState('');

	const [password, setPassword] = useState('');
	const [errorPassword, setErrorPassword] = useState('');

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));		
		if(user !== null){
			navigate('/welcome', { replace: true});
		}
	});


	const validation = () => {
		const validEmailFormat = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+(?:@[A-Za-z0-9-]+)(?:.[A-Za-z0-9-]+)$/;
		let isValidated = true;

		if( email === "" ){
			setErroremail("Email-ID can't be empty");
			isValidated = false;
		}else if( !email.match(validEmailFormat) ){
			setErroremail("Email-ID format is incorrect");
			isValidated = false;
		}else{
			setErroremail("");
		}

		if( password === "" ){
			setErrorPassword("Password can't be empty");
			isValidated = false;
		}else{
			setErrorPassword("");
		}

		return isValidated;
	}

	const loginUser = (e) => {
		e.preventDefault();

		if( !document.getElementById('login-error-msg').classList.contains('hide') ){
			document.getElementById('login-error-msg').classList.add('hide');
		}

		if(validation()){
			const user = {
				email,
				password
			};

			fetch(`${process.env.REACT_APP_API_URI}/auth`, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				  },
				method: 'POST',
				body: JSON.stringify(user)
			})
			.then(resp => resp.json())
			.then(loggedInUser => {
				if(loggedInUser.id != null){
					delete loggedInUser.password;
					localStorage.setItem('user',JSON.stringify(loggedInUser));
					navigate('/dashboard', { replace: true});
				}else{
					document.getElementById('login-error-msg').classList.remove('hide');
				}
			})
			.catch(error => { 
				console.log(error);
				document.getElementById('login-error-msg').classList.remove('hide');
			})
		}
	}	

	return (
		<div className="container divider">
			<h5 className="section-title">Login to book a vacation!</h5>

			<div className="form-wrap">
				<div id='login-error-msg' className="hide text-center">
					Email and password are incorrect. Please try logging in with correct credentials.
				</div>
				<form>
					<div className="input-group">
						<label htmlFor="email">E-mail ID *</label>
						<input type="email" id="email" value={email} onChange={ (e) => { setemail(e.target.value) }}/>
						<span className="error-msg">{erroremail}</span>
					</div>

					<div className="input-group">
						<label htmlFor="password">Password *</label>
						<input type="password" id="password" value={password} onChange={ (e) => { setPassword(e.target.value) }}/>
						<span className="error-msg">{errorPassword}</span>
					</div>

					<div className="text-center">
						<button className='primary-btn sign-up-btn' onClick={loginUser}>Login</button>

						<div className="direct-to-login">
							Don't have an account? <Link to="/signup">Sign Up now!</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default LoginForm;