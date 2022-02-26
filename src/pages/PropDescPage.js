import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyItem from '../components/PropertyItem';

const PropDescPage = () => {
	const {id} = useParams();
	let [singleProp, setSingleProp] = useState(
		{
			"id": 0,
			"image": "",
			"title": "",
			"description": "",
			"price": 0,
			"type": "",
			"houseRules": [],
			"amenities": [],
			"location": "",
			"bestSeller": false
		}
	);
	
	useEffect(() => {
		const propApiURL = `http://localhost:1000/properties/${id}`;
		fetch(propApiURL)
		.then(resp => resp.json())
		.then(data => setSingleProp(data))
		.catch(error => console.log(error));
	}, [id]);


	return (
		<div>
		<p>Prop desc page</p>
		<PropertyItem 						
			id={singleProp.id}
			singleProperty={singleProp}
		/>
		</div>
	)
}

export default PropDescPage