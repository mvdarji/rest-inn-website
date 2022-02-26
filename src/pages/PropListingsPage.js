import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import PropertyListingsItem from '../components/PropertyListingsItem';

const PropListingsPage = () => {
	// using state for all properties lists
	let [properties, setProperties] = useState([]);

	// get all properties
	useEffect( () => {
		const allPropertiesApiURL = `http://localhost:1000/properties`;
		fetch(allPropertiesApiURL)
		.then( resp => resp.json())
		.then( data => setProperties(data))
		.catch( error => console.log(error));
	}, []);

	return (
		<div>
			{properties.map(property => (
				<Link 
					to={`/properties/${property.id}`} 
					key={property.id}
				>
					<PropertyListingsItem 						
						id={property.id}
						singleProperty={property}
					/>
				</Link>
			))}
		</div>
	)
}

export default PropListingsPage