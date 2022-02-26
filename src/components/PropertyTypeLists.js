import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropertyTypeItem from './PropertyTypeItem';

const PropertyTypeLists = () => {
    const [propTypes, setPropTypes] = useState([]);

    useEffect(() => {
        const MaxNoOfPropTypes = 5;
        const propTypesApiURL = `http://localhost:1000/propertyTypes?_limit=${MaxNoOfPropTypes}`;

        fetch(propTypesApiURL)
        .then(resp => resp.json())
        .then(data => setPropTypes(data))
        .catch(error => console.log(error));
    }, []);
    return(
        <div >
            <h2>This is Property Type section</h2>

            {propTypes.map(propType => (
                <Link 
                    to={`propertyTypes/${propType.type}`}
                    key={propType.id} 
                >

                    <PropertyTypeItem                         
                        id={propType.id} 
                        propType={propType}
                    />
                </Link>
            ))}
        </div>
    )
}

export default PropertyTypeLists;