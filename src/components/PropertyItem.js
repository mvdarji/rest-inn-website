const PropertyItem = (props) => {
    const singleProp = props.singleProperty;
    return (
        <div style={{borderBottom: "1px solid red"}} >
            <p>Location: {singleProp.location}</p>
            <img style={{width: "200px"}} src={singleProp.image} alt="Property" />
            <p>Title: {singleProp.title}</p>
            <p>description: {singleProp.description}</p>
            <p>Price: ${singleProp.price}</p>
            <p>type: {singleProp.type}</p>
            <p>
                House Rules
                <ul>
                    {singleProp.houseRules.map(rule => 
                        <li>{rule}</li>
                    )}
                </ul>
            </p>
            <p>
                Amenities
                <ul>
                    {singleProp.amenities.map(amenity => 
                        <li>{amenity}</li>
                    )}
                </ul>
            </p>
            <p>Bestseller: {(singleProp.bestSeller) ? 'Yes':'No'}</p>
        </div>
    )
}

export default PropertyItem;