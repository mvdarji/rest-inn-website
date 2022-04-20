import {Link, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import PropertyTypeLists from '../components/PropertyTypeLists';
import BestSellerLists from '../components/BestSellerLists';
import Footer from '../components/Footer';

const DashboardPage = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if(user === null){
            navigate('/login', { replace: true});
        }else{
            setUserName(`${user.firstName} ${user.lastName}!`);
        }
    }, [navigate]); 

	return (
		<>
		<Header/>
		<div id="main">
			<div className="container divider">
                <div className="welcome-banner">
                    <div className="banner-content">
                        <h2>Welcome <span className='tt-c'>{userName}</span></h2>
                        <p>Explore our vacation properties, check out properties by type &amp; our bestsellers!</p>
                        <Link className='primary-btn' to='/properties'>explore properties</Link>
                    </div>
                </div>
            </div>
			<PropertyTypeLists/>
			<BestSellerLists />
		</div>
        <Footer/>
		</>
	)
}

export default DashboardPage;