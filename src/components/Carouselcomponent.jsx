import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  {Carousel} from 'react-responsive-carousel';

 

const Carouselcomponent=()=>{ 
    return (
        <div class="carousel-wrapper">
            <Carousel className="w-100 h-90" >
                <div>
                    <img src="../photo1.jpg" alt="one" />
                </div>
                <div>
                    <img src="../photo2.jpg" alt="two" />
                </div>
                <div>
                    <img src="../photo4.jpg" alt="three" />
                </div>
                <div>
                    <img className="" src="../photo3.jpg" alt="four"/>
                </div>
            </Carousel>
        </div>
    );
}

export default Carouselcomponent;
