// pages componenet
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import PropListingsPage from '../pages/PropListingsPage';
import PropTypePage from '../pages/PropTypePage';
import PropDescPage from '../pages/PropDescPage';
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
				<Route path='properties' element={<PropListingsPage/>} />
				<Route path='properties/:id' element={<PropDescPage/>} />
			</Routes>
		</BrowserRouter>			
	)
}

export default App;