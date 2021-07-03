import react, { Fragment } from 'react';
import img1 from './../Assets/img1.jpg';
import img4 from './../Assets/img4.jpg';
import img7 from './../Assets/img7.jpg';
import img5 from './../Assets/img5.jpg';


 
const Footer=(Footer)=>{
    return(
        <Fragment>
        <div className="flex flex-row">
            <div className="flex flex-1 justify-around items-center space-x-10">
            <div className="flex flex-col flex  h-40 w-40 items-center border-b border-gray-200">
                <img src={img1}/>
                <span>uytgkjbgb</span>
                </div>
            <div className="flex flex-col flex h-40 w-20 items-center">
                <img src={img4}/>
                </div>
                <div className="flex flex-col flex h-50 w-40 items-center">
                <img src={img7}/>
                </div>    
            <div className="flex flex-col flex h-40 w-20 items-center">
                <img src={img5}/>
                </div>



            </div>
            </div>

        </Fragment>

    )
  
    }
    
    
export default Footer;