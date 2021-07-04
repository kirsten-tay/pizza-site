import react, {Fragment} from 'react';
import img8 from './../Assets/img8.jpg';



const Hero=(Hero)=>{
    return(
        <Fragment>
    
            <div className="flex flex-row flex-1 justify-around items-center  space-x-10">
            <div className="flex flex-col justify-center items-center  transform rotate-90 ... border-2 p-5 border-gray-200">
                <img src={img8} class=""/>
                </div>

             <div className="flex flex-col justify-center  py-3 px-40  items-center">
                        <span>ABOUT US</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <span> Enim eum dolor voluptatum. Totam nam optio veritatis ad distinctio itaque dolor corporis, fugit a eius sapiente quas eveniet aliquid, quidem nesciunt?</span>
                    </div>
             </div>
         </Fragment>
    )
  
    }
    
    

export default Hero;    


