import '../assets/css/PropertyItem.css';
import { FaHeart } from "react-icons/fa";
import {FaHouseUser, FaStar, FaClipboardCheck} from 'react-icons/fa'

const PropertyItem = (props) => {
    const singleProp = props.singleProperty;
    return (
        <div className="single-prop-wrap">
			<div className="img-wrap">
				{ (singleProp.bestSeller) ? <FaHeart className="fa best-seller-fa" /> : '' }			
            	<img src={singleProp.image} className="img-resp" alt="Property" />
			</div>

			<div className="single-prop-content-wrap">
				<div className="single-prop-left">
					<h3 className="single-prop-title">{singleProp.title}</h3>
					<p className="single-prop-loc"><em>{singleProp.location}</em></p>
					<p className="single-prop-desc">{singleProp.description}</p>
				</div>
				<div className="single-prop-right">
					<p className="single-prop-price">${singleProp.price} CAD</p>
					<p className="single-prop-type icon-text-wrap">
						<FaHouseUser className="fa" />
						{singleProp.type.propType}
					</p>
					{ (singleProp.bestSeller) ? 
						<p className="single-prop best-seller icon-text-wrap">
							<FaStar className="fa" />
							Best Seller
						</p>
						: '' }
				</div>
				
			</div>

			<div className="rules-amenities-wrap">
				<div className="col rules-wrap">
					<h5 className="section-title">House rules</h5>
					<ul className='single-prop-lists-ul'>
						{singleProp.houseRules.map( (rule, i) => 
							<li className="icon-text-wrap" key={i}>
								<FaClipboardCheck className="fa" /> {rule}
							</li>
						)}
					</ul>
				</div>

				<div className="col amenities-wrap">
					<h5 className="section-title">All the amenities</h5>
					<ul className='single-prop-lists-ul'>
						{singleProp.amenities.map(( amenity, i) => 
							<li className="icon-text-wrap" key={i}>
								<FaClipboardCheck className="fa" /> {amenity}
							</li>
						)}
					</ul>
				</div>
			</div>
        </div>
    )
}

export default PropertyItem;