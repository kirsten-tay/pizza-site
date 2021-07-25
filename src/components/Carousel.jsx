import react from 'react';
import Slider from './Slider';


const Carousel=()=>{
  return(

    <div className="flex flex-row ">
      <div className="  flex flex-col justify-center  w-screen md:w-3/4 items-center">
        <div className="relative w-full">
          <div className="carousel">
          
            
              <div className="w-full flex-shrink-0">
                <Slider className="w-full object-contain" />
              </div>
            
          
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-2xl ">
        <span>ABOUT US</span>
        <span>Lorem ipsum dolor, sit amet consectetur  </span>
        <span>adipisicing elit.Maiores, cumque id provident </span>
        <span> dolore voluptates saepe nihil reprehenderit </span>
        <span> asperiores ipsam, porro beatae inventore </span>
        <span>repudiandae nostrum ipsa eligendi. </span>
        <span>Repellat sit quaerat doloremque?</span>
      </div>
    </div>
  );
};

export default Carousel;