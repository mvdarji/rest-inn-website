import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PropertyItem from '../components/PropertyItem';
import Footer from '../components/Footer';

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
		const propApiURL = `https://rest-inn-api-mvdarji.herokuapp.com/properties/${id}`;
		fetch(propApiURL)
		.then(resp => resp.json())
		.then(data => setSingleProp(data))
		.catch(error => console.log(error));
	}, [id]);


	return (
		<>
		<Header/>
		<div id="main">
			<div className="container">
				<h5 className="section-title">{singleProp.title}</h5>
				<PropertyItem 						
					id={singleProp.id}
					singleProperty={singleProp}
				/>
			</div>
		</div>
        <Footer/>
		</>
	)
}

export default PropDescPage