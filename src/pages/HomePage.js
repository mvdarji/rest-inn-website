import Header from '../components/Header';
import Hero from '../components/Hero';
import PropertyTypeLists from '../components/PropertyTypeLists';
import BestSellerLists from '../components/BestSellerLists';
import Footer from '../components/Footer';

// in the end replace all api baseURL with 
// https://rest-inn-api-mvdarji.herokuapp.com/

const HomePage = () => {
	return (
		<>
		<Header/>
		<div id="main">
			<Hero/>
			<PropertyTypeLists/>
			<BestSellerLists />
		</div>
        <Footer/>
		</>
	)
}

export default HomePage;