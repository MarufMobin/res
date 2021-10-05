import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgFirst from '../../images/farhan.jpg'
import imgSec from '../../images/nadim.jpg'
import imgThird from '../../images/maxresdefault.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                   <div className="banner-img">
                    <img
                        className="d-block  cus-height"
                        src={imgFirst}
                        alt="First slide"
                        />
                   </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <div className="banner-img">
                    <img
                        className="d-block  cus-height"
                        src={imgSec}
                        alt="Second slide"
                        />
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="banner-img">
                        <img
                        className="d-block  cus-height"
                        src={imgThird}
                        alt="Third slide"
                        />
                    </div>

                    
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;