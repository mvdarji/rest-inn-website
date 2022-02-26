import {useParams, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropertyListingsItem from '../components/PropertyListingsItem';

const PropTypePage = () => {
	const {type} = useParams();
	const [typeSpecificProps, setTypeSpecificProps] = useState([]);
	let filteredProps = [];

	useEffect(() => {
		// const MaxNoOfPropTypes = 5;
        const allPropsApiURL = `http://localhost:1000/properties`;

        fetch(allPropsApiURL)
        .then(resp => resp.json())
        .then(data => {
			filteredProps = data.filter( prop => prop.type === type)
			setTypeSpecificProps(filteredProps);
		})
        .catch(error => console.log(error));
	}, []);

	return (
		<div>
			<p>PropTypePage: {type}</p>
			{typeSpecificProps.map(property => (
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

export default PropTypePage