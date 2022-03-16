import '../assets/css/Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import { Link } from 'react-router-dom';

const carouselItems = [
    {
        img: image1,
        title: 'Find that perfect resort to relax',
        link: 'propertyTypes/resorts'
    },
    {
        img: image2,
        title: 'Find that perfect apartment for you',
        link: 'propertyTypes/apartments'
    },
    {
        img: image3,
        title: 'Find homes for your next trip',
        link: 'propertyTypes/bed and breakfasts'
    }
];

const Hero = () => {
    return(
        <div className="container divider">
            <Carousel fade='true'>
                {carouselItems.map( (item, i) => {
                    return ( <Carousel.Item key={i}>
                        <img className="img-resp" src={item.img} alt="explore" />
                        <Carousel.Caption>
                            <h3>{item.title}<span>.</span></h3>
                            <Link to={item.link} className='primary-btn'>Explore</Link>
                        </Carousel.Caption>
                    </Carousel.Item> )
                })}
                </Carousel>
        </div>
    )
}

export default Hero;