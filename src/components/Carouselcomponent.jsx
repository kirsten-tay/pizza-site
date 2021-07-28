import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { motion } from 'framer-motion'


const variants = {
    hidden: { x: -200 },
    visible: { x: 0 }
}

const Carouselcomponent=()=>{
    return (
        <div class="carousel-wrapper">
            <Carousel className="w-100 h-90" >
                <div>
                    <img src="../photo1.jpg" />
                </div>
                <div>
                    <img src="../photo2.jpg" />
                </div>
                <div>
                    <img src="../photo4.jpg" />
                </div>
                <div>
                    <img className="" src="../photo3.jpg" />
                </div>
            </Carousel>
        </div>
    );
}

export default Carouselcomponent;
