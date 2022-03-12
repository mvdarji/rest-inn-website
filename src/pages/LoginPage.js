import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const LoginPage = () => {
	return (
		<>
		<Header/>
		<div id="main">
			<LoginForm />			
		</div>
        <Footer/>
		</>
	)
}

export default LoginPage;