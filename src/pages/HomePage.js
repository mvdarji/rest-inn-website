import Header from '../components/Header';
import Hero from '../components/Hero';
import PropertyTypeLists from '../components/PropertyTypeLists';
import BestSellerLists from '../components/BestSellerLists';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const HomePage = () => {
	// let [properties, setProperties] = useState([]);
	let [bestSellerProperties, setBestSellerProperties] = useState([]);
	let [propTypes, setPropTypes] = useState([]);

	// get data from API
	const allPropertiesApiURL = 'http://localhost:1000/properties';
	const propertiesTypeApiURL = 'http://localhost:1000/propertyTypes';

	useEffect(() => {
		fetch(allPropertiesApiURL)
		.then( resp => resp.json() )
		.then( data => {
			let bestSellerProps = data.filter( property => property.bestSeller);
			setBestSellerProperties(bestSellerProps);
			// setProperties(data);
		})
		.catch( error => {
			console.error(error);
		});

		fetch(propertiesTypeApiURL)
		.then( resp => resp.json() )
		.then( json => setPropTypes(json))
		.catch( error => {
			console.error(error);
		});
	}, []);

	return (
		<>
		<Header/>
		<Hero/>
        <PropertyTypeLists allPropTypes={propTypes}/>
        <BestSellerLists allProperties={bestSellerProperties}/>
        <Footer/>
		</>
	)
}

export default HomePage;