import Header from '../components/Header';
import Hero from '../components/Hero';
import PropertyTypeLists from '../components/PropertyTypeLists';
import BestSellerLists from '../components/BestSellerLists';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const HomePage = () => {
	// let [allProperties, setProperties] = useState([]);
	// let [bestSellerProperties, setBestSellerProperties] = useState([]);
	// let [propTypes, setPropTypes] = useState([]);

	// // get data from API
	// const APIRootURL = 'http://localhost:1000';
	// const noOfPropTypes = 5;
	// const allPropertiesApiURL = `${APIRootURL}/properties`;
	// const propertiesTypeApiURL = `${APIRootURL}/propertyTypes?_limit=${noOfPropTypes}`;

	// useEffect(() => {
	// 	fetch(allPropertiesApiURL)
	// 	.then( resp => resp.json() )
	// 	.then( data => {
	// 		let bestSellerProps = data.filter( property => property.bestSeller);
	// 		setBestSellerProperties(bestSellerProps);
	// 		setProperties(data);
	// 	})
	// 	.catch( error => {
	// 		console.error(error);
	// 	});

	// 	fetch(propertiesTypeApiURL)
	// 	.then( resp => resp.json() )
	// 	.then( json => setPropTypes(json))
	// 	.catch( error => {
	// 		console.error(error);
	// 	});
	// }, [propertiesTypeApiURL, allPropertiesApiURL]);

	return (
		<>
		<Header/>
		{/* <Hero/> */}
        {/* <PropertyTypeLists/> */}
        <BestSellerLists />
        {/* <Footer/> */}
		</>
	)
}

export default HomePage;