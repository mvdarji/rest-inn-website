import PropertyTypeItem from './PropertyTypeItem';

const PropertyTypeLists = (props) => {
    return(
        <div >
            <h2>This is Property Type section</h2>

            {props.allPropTypes.map(propType => (
                <PropertyTypeItem key={propType.id} id={propType.id} type={propType.type}/>
            ))}
        </div>
    )
}

export default PropertyTypeLists;