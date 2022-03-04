import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import '../assets/css/BestSellerItem.css';

const BestSellerItem = (props) => {
    const singleProp = props.singleProp
    return(
        <div className="best-seller-item-wrap">
            <Link to={`/properties/${singleProp.id}`} className="best-seller-item-a">
                <div className="best-seller-item">
                    <div className="img-wrap">
                        <FaHeart className="fa best-seller-fa" />
                        <img src={singleProp.image} className="img-resp" alt="Property" />
                    </div>
                    <div className="best-seller-content">
                        <p className="best-seller-price">${singleProp.price} CAD/ night</p>
                        <p className="best-seller-loc">{singleProp.location}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BestSellerItem;