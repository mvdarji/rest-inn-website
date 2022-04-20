import { useState, useEffect } from 'react';
import PropertyTypeItem from './PropertyTypeItem';

const PropertyTypeLists = () => {
    const [propTypes, setPropTypes] = useState([]);

    useEffect(() => {
        const MaxNoOfPropTypes = 4;
        const propTypesApiURL = `${process.env.REACT_APP_API_URI}/propertyTypes?limit=${MaxNoOfPropTypes}`;

        fetch(propTypesApiURL)
        .then(resp => resp.json())
        .then(data => setPropTypes(data))
        .catch(error => console.log(error));
    }, []);
    return(
        <div className="prop-type-main-wrap divider">
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
        </div>
    )
}

export default PropertyTypeLists;