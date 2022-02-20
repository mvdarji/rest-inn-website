import Header from './Header';
import Hero from './Hero';
import PropertyTypeLists from './PropertyTypeLists';
import BestSellerLists from './BestSellerLists';
import Footer from './Footer';
import { useState, useEffect } from 'react';

const App = () =>{
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
		.then( data => setPropTypes(data))
		.catch( error => {
			console.error(error);
		});
	}, []);

	return(
		<>
			<Header/>
			<Hero/>
			<PropertyTypeLists allPropTypes={propTypes}/>
			<BestSellerLists allProperties={bestSellerProperties}/>
			<Footer/>
		</>
	)
}

export default App;