import '../assets/css/Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';


const Hero = () => {
    return(
        <div className="container divider">
            <Carousel fade='true'>
                <Carousel.Item>
                    <img className="img-resp" src={image1} alt="Resort" />
                    <Carousel.Caption>
                        <h3>Find that perfect resort to relax<span>.</span></h3>
                        <a href='propertyTypes/resorts' className='primary-btn'>Explore</a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="img-resp" src={image2} alt="Resort" />
                    <Carousel.Caption>
                        <h3>Find that perfect apartment for you<span>.</span></h3>
                        <a href='propertyTypes/apartments' className='primary-btn'>Explore</a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img className="img-resp" src={image3} alt="Resort" />
                    <Carousel.Caption>
                        <h3>Find homes for your next trip<span>.</span></h3>
                        <a href='propertyTypes/bed and breakfasts' className='primary-btn'>Explore</a>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Hero;