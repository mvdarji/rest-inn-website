import Header from '../components/Header';
import Hero from '../components/Hero';
import PropertyTypeLists from '../components/PropertyTypeLists';
import BestSellerLists from '../components/BestSellerLists';
import Footer from '../components/Footer';

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