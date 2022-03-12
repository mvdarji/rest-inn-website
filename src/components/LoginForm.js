import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
	const navigate = useNavigate();
	// all fields state varibales and respective error variables
	const [emailId, setEmailId] = useState('');
	const [errorEmailId, setErrorEmailId] = useState('');

	const [password, setPassword] = useState('');
	const [errorPassword, setErrorPassword] = useState('');

	const loginUser = (e) => {
		e.preventDefault();

		if(validation()){
			navigate('/', { replace: true});
		}
	}

	const validation = () => {
		const validEmailFormat = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+(?:@[A-Za-z0-9-]+)(?:.[A-Za-z0-9-]+)$/;
		let isValidated = true;

		if( emailId === "" ){
			setErrorEmailId("Email-ID can't be empty");
			isValidated = false;
		}else if( !emailId.match(validEmailFormat) ){
			setErrorEmailId("Email-ID format is incorrect");
			isValidated = false;
		}else{
			setErrorEmailId("");
		}

		if( password === "" ){
			setErrorPassword("Password can't be empty");
			isValidated = false;
		}else{
			setErrorPassword("");
		}

		return isValidated;
	}

	return (
		<div className="container divider">
			<h5 className="section-title">Login to book a vacation!</h5>

			<div className="form-wrap">
				<form>
					<div className="input-group">
						<label htmlFor="email">E-mail ID *</label>
						<input type="email" id="email" value={emailId} onChange={ (e) => { setEmailId(e.target.value) }}/>
						<span className="error-msg">{errorEmailId}</span>
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