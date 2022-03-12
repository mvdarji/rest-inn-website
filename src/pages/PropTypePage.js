import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import NoPropertyFound from '../components/NoPropertyFound';
import PropertyListingsItem from '../components/PropertyListingsItem';
import Footer from '../components/Footer';

const PropTypePage = () => {
	const {type} = useParams();
	const [typeSpecificProps, setTypeSpecificProps] = useState([]);
	
	useEffect(() => {
		let filteredProps = [];
        const allPropsApiURL = `https://rest-inn-api-mvdarji.herokuapp.com/properties`;

        fetch(allPropsApiURL)
        .then(resp => resp.json())
        .then(data => {
			filteredProps = data.filter( prop => prop.type === type)
			setTypeSpecificProps(filteredProps);
		})
        .catch(error => console.log(error));
	}, [type]);

	return (
		<>
		<Header/>
		<div id="main">
			<div className='container'>
				<h5 className="section-title">{type}</h5>

				<div className="all-properties-listings">
					{(typeSpecificProps.length === 0) ? 
						// true condition
						<NoPropertyFound 
							displayAllProps={true}
							message="No Properties found for this type."
						/> : 
						// falsey condition
						typeSpecificProps.map(property => (
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

export default PropTypePage