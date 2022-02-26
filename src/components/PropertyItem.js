const PropertyItem = (props) => {
    const singleProp = props.singleProperty;
    return (
        <div style={{borderBottom: "1px solid red"}} >
            <p>Title: {singleProp.title}</p>
            <p>description: {singleProp.description}</p>
            <p>amenities: {singleProp.amenities}</p>
            <p>Bestseller: {(singleProp.bestSeller) ? 'Yes':'No'}</p>
        </div>
    )
}

export default PropertyItem;