import { useState, useEffect } from "react";
import BestSellerItem from './BestSellerItem';

const BestSellerLists = (props) => {
    // using state for all best seller properties lists
	let [bestSellerProps, setBestSellerProps] = useState([]);
    
	// get all properties
	useEffect( () => {
        let bestSellers = [];
        let maxNoOfBestSellerProps = 4;
		const allPropertiesApiURL = `https://rest-inn-api-mvdarji.herokuapp.com/properties`;
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
		<div className='container divider'>
			<h5 className="section-title">Our Best Seller</h5>

            <div className="best-sellers-wrap">
                {bestSellerProps.map(singleProperty => (
                    <BestSellerItem                         
                        key={singleProperty.id} 
                        id={singleProperty.id} 
                        singleProp={singleProperty}
                    />
                ))}
            </div>

        </div>
    )
}

export default BestSellerLists;