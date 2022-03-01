import { Link } from "react-router-dom";
import { FaHouseUser, FaStar } from "react-icons/fa";
import "../assets/css/PropertyListingsItem.css";

const PropertyListingsItem = (props) => {
    const singleProp = props.singleProperty;
    return (
        <div className="prop-listing-item-wrap">
            <Link to={`/properties/${singleProp.id}`} className="prop-listing-item-a">
                <div className="prop-listing-item">
                    <div className="img-wrap">
                        <img src={singleProp.image} className="img-resp" alt="Property" />
                    </div>
                    <div className="prop-listing-content-wrap">
                        <div className="prop-listing-content">
                            <h5 className="prop-listing-title">{singleProp.title}</h5>
                            <p className="prop-listing-loc">{singleProp.location}</p>
                            <p className="prop-listing-type icon-text-wrap">
                                <FaHouseUser className="fa" />
                                {singleProp.type}
                            </p>
                            { (singleProp.bestSeller) ? 
                                <p className="best-seller icon-text-wrap">
                                    <FaStar className="fa" />
                                    Best Seller
                                </p>
                                : '' }
                        </div> 
                        <div className="price-wrap">
                            <p className="prop-listing-price">${singleProp.price} CAD</p>
                            <span className="primary-btn view-listing-btn">View Listing</span>
                        </div>   
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PropertyListingsItem;