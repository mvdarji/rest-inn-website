// import PropertyItem from './PropertyItem';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropertyListingsItem from './PropertyListingsItem';

const BestSellerLists = (props) => {
    // using state for all best seller properties lists
	let [bestSellerProps, setBestSellerProps] = useState([]);
    let bestSellers = [];

	// get all properties
	useEffect( () => {
        let maxNoOfBestSellerProps = 4;
		const allPropertiesApiURL = `http://localhost:1000/properties`;
		fetch(allPropertiesApiURL)
		.then( resp => resp.json())
		.then( allProps => {
            
            bestSellers = allProps.filter( singleProp => {
                if( singleProp.bestSeller && maxNoOfBestSellerProps > 0){
                    maxNoOfBestSellerProps--;
                    return singleProp;
                }
				return false;
            } );
            setBestSellerProps(bestSellers);
        })
		.catch( error => console.log(error));
	}, []);

    return(
        <div >
            <h2>This is Best Seller section</h2>

            {bestSellerProps.map(property => (
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

export default BestSellerLists;