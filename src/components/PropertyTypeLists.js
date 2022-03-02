import { useState, useEffect } from 'react';
import PropertyTypeItem from './PropertyTypeItem';

const PropertyTypeLists = () => {
    const [propTypes, setPropTypes] = useState([]);

    useEffect(() => {
        const MaxNoOfPropTypes = 4;
        const propTypesApiURL = `http://localhost:1000/propertyTypes?_limit=${MaxNoOfPropTypes}`;

        fetch(propTypesApiURL)
        .then(resp => resp.json())
        .then(data => setPropTypes(data))
        .catch(error => console.log(error));
    }, []);
    return(
        <div className='container'>
			<h5 className="section-title">Browse by Property Types</h5>

            <div className="prop-types-wrap">
                {propTypes.map(propType => (
                    <PropertyTypeItem                         
                        key={propType.id} 
                        id={propType.id} 
                        propType={propType}
                    />
                ))}
            </div>

        </div>
    )
}

export default PropertyTypeLists;