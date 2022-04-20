// SITE URL: https://rest-inn-mvdarji.netlify.app/

// pages componenet
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import SignUpPage from '../pages/SignUpPage';
import DashboardPage from '../pages/DashboardPage';
import PropListingsPage from '../pages/PropListingsPage';
import PropTypePage from '../pages/PropTypePage';
import PropDescPage from '../pages/PropDescPage';
import NotFound404 from '../pages/NotFound404';
// css
import '../assets/css/App.css';
// router components
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
	return(
		// setting up router
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage/>} />
				<Route path='signup' element={<SignUpPage/>} />
				<Route path='login' element={<LoginPage/>} />
				<Route path='logout' element={<LogoutPage />} />
				<Route path='dashboard' element={<DashboardPage/>}/>
				<Route path='properties' element={<PropListingsPage/>} />
				<Route path='properties/:id' element={<PropDescPage/>} />
				<Route path='propertyTypes/:type' element={<PropTypePage />} />
				<Route path='*' element={<NotFound404 />} />
			</Routes>
		</BrowserRouter>			
	)
}

export default App;