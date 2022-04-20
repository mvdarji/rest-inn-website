import { Link } from "react-router-dom";
import "../assets/css/PropertyTypeItem.css";

const PropertyTypeItem = (props) => {
    const propType = props.propType;
    return (
        <div className="prop-type-wrap">
            <Link to={`/propertyTypes/${propType.propType}`} className="prop-type-a">
                <p className="prop-type-title">{propType.propType}</p>
            </Link>
        </div>
    )
}

export default PropertyTypeItem;