import PropertyItem from './PropertyItem';

const BestSellerLists = (props) => {
    return(
        <div >
            <h2>This is Best Seller section</h2>

            {props.allProperties.map( (property) => (
                <PropertyItem key={property.id} id={property.id} title={property.title}/>
            ))}
        </div>
    )
}

export default BestSellerLists;