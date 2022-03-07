import Header from '../components/Header';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';

const SignUpPage = () => {
	return (
		<>
		<Header/>
		<div id="main">
			<SignupForm />			
		</div>
        <Footer/>
		</>
	)
}

export default SignUpPage;