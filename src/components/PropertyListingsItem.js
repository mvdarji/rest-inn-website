const PropertyListingsItem = (props) => {
    const singleProp = props.singleProperty;
    return (
        <div style={{borderBottom: "1px solid"}} >
            <p>Location: {singleProp.location}</p>
            <img style={{width: "200px"}} src={singleProp.image} alt="Property" />
            <p>Title: {singleProp.title}</p>
            <p>Price: ${singleProp.price}</p>
            <p>type: {singleProp.type}</p>
            <p>best seller: { (singleProp.bestSeller) ? "Yes" : "No" }</p>
        </div>
    )
}

export default PropertyListingsItem;