const PropertyListingsItem = (props) => {
    return (
        <div style={{borderBottom: "1px solid"}} >
            <p>Title: {props.singleProperty.title}</p>
            <p>description: {props.singleProperty.description}</p>
        </div>
    )
}

export default PropertyListingsItem;