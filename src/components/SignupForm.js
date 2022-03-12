import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Forms.css';

const SignupForm = () => {
	// all fields state varibales and respective error variables
	const [emailId, setEmailId] = useState('');
	const [errorEmailId, setErrorEmailId] = useState('');

	const [password, setPassword] = useState('');
	const [errorPassword, setErrorPassword] = useState('');

	const [cpassword, setCpassword] = useState('');
	const [errorCpassword, setErrorCpassword] = useState('');

	const [fName, setfName] = useState('');
	const [errorfName, setErrorfName] = useState('');

	const [lName, setlName] = useState('');
	const [errorlName, setErrorlName] = useState('');

	// form validation
	const validateForm = () => {
		let isValidated = true;
		const validEmailFormat = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+(?:@[A-Za-z0-9-]+)(?:.[A-Za-z0-9-]+)$/;

		// all fields validation
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

		if( cpassword === "" ){
			setErrorCpassword("Confirm Password can't be empty");
			isValidated = false;
		}else if( password !== cpassword ){
			// checking if passowrd and confirm passowrd fields are the same
			setErrorCpassword("Password and Confirm Password should be same");
			isValidated = false;
		}
		else{
			setErrorCpassword("");
		}

		if( fName === "" ){
			setErrorfName("First Name can't be empty");
			isValidated = false;
		}else{
			setErrorfName("");
		}

		if( lName === "" ){
			setErrorlName("Last Name can't be empty");
			isValidated = false;
		}else{
			setErrorlName("");
		}
		return isValidated;
	}

	// add new user via API
	const signupUser = (e) => {
		e.preventDefault();
		if(validateForm()){
			const newUSer = {
				emailId: emailId,
				password: password,
				fName: fName,
				lName: lName
			};

			fetch(`http://localhost:1000/users`, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				  },
				method: 'POST',
				body: JSON.stringify(newUSer)
			})
			.then(resp => resp.json())
			.then(data => {
				document.getElementById('success-msg').classList.remove('hide');
				setEmailId('');
				setPassword('');
				setCpassword('');
				setfName('');
				setlName('');
			})
			.catch(error => { console.log(error) })
		}else{
			let successMsgClassList = document.getElementById('success-msg').classList;
			if( !successMsgClassList.contains('hide') ){
				successMsgClassList.add('hide');
			}
		}
	}

	return (
		<div className="container divider">
			<h5 className="section-title">Let's get you signed up</h5>

			<div className="form-wrap">
				<div id='success-msg' className="hide text-center">User has been registered successfully! Click here to <Link to="/login"><b>Login</b></Link></div>
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

					<div className="input-group">
						<label htmlFor="cpassword">Confirm Password *</label>
						<input type="password" id="cpassword" value={cpassword} onChange={ (e) => { setCpassword(e.target.value) }}/>						
						<span className="error-msg">{errorCpassword}</span>
					</div>

					<div className="input-group">
						<label htmlFor="fName">First Name *</label>
						<input type="text" id="fName" value={fName} onChange={ (e) => { setfName(e.target.value) }}/>
						<span className="error-msg">{errorfName}</span>						
					</div>

					<div className="input-group">
						<label htmlFor="lName">Last Name *</label>
						<input type="text" id="lName" value={lName} onChange={ (e) => { setlName(e.target.value) }}/>
						<span className="error-msg">{errorlName}</span>						
					</div>

					<div className="text-center">
						<button className='primary-btn sign-up-btn' onClick={signupUser}>Create Account</button>

						<div className="direct-to-login">
							Already have an account? <Link to="/login">Login!</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignupForm;