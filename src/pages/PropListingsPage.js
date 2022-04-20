import { useEffect, useState } from "react";
import Header from '../components/Header';
import PropertyListingsItem from '../components/PropertyListingsItem';
import Footer from '../components/Footer';
import NoPropertyFound from "../components/NoPropertyFound";

const PropListingsPage = () => {
	// using state for all properties lists
	let [properties, setProperties] = useState([]);

	// get all properties
	useEffect( () => {
		const allPropertiesApiURL = `${process.env.REACT_APP_API_URI}/properties`;
		fetch(allPropertiesApiURL)
		.then( resp => resp.json())
		.then( data => setProperties(data))
		.catch( error => console.log(error));
	}, []);

	return (
		<>
		<Header/>
		<div id="main">
			<div className="container">
				<h5 className="section-title">all properties</h5>
				<div className="all-properties-listings">
					{(properties.length === 0) ? 
						// true condition
						<NoPropertyFound message="No Properties found." /> : 
						// falsey condition
						properties.map(property => (
							<PropertyListingsItem 	
								key={property.id}					
								id={property.id}
								singleProperty={property}
							/>
						))
					}
				</div>
			</div>
		</div>
        <Footer/>
		</>
	)
}

export default PropListingsPage