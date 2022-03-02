import { Link } from "react-router-dom";
import "../assets/css/PropertyTypeItem.css";

const PropertyTypeItem = (props) => {
    const propType = props.propType;
    return (
        <div className="prop-type-wrap">
            <Link to={`/propertyTypes/${propType.type}`} className="prop-type-a">
                <div className="img-wrap">
                    <img src={propType.image} className="img-resp" alt="Property Type"/>
                </div>
                <p className="prop-type-title">{propType.type}</p>
            </Link>
        </div>
    )
}

export default PropertyTypeItem;