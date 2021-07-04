import react, { Fragment } from 'react';
import img1 from './../Assets/img1.jpg';
import img4 from './../Assets/img4.jpg';
import img7 from './../Assets/img7.jpg';
import img5 from './../Assets/img5.jpg';


 
const Sec=(Sec)=>{
    return(
        <Fragment>
        <div className="flex flex-row">
            <div className="flex flex-1 justify-around items-center  p-10 space-x-10">
            <div className="flex flex-col justify-center items-center w-15 border-2 p-5 border-gray-200">
                <img src={img1} className=""/>
                <span>LOREM</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, cumque id provident dolore voluptates saepe nihil reprehenderit asperiores ipsam, porro beatae inventore repudiandae nostrum ipsa eligendi. Repellat sit quaerat doloremque?</span>
                </div>
            <div className="flex flex-col justify-center items-center   border-2 p-5 border-gray-200">
                <img src={img4}/>
                <span>LOREM</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, accusamus ut minus iusto nesciunt porro adipisci similique dicta vero inventore veritatis optio. Fuga maxime eaque minima ea mollitia modi commodi.</span>
                </div>
                <div className="flex flex-col justify-center items-center border-2 p-5 border-gray-200">
                <img src={img7}/>
                <span>LOREM</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reiciendis beatae ad dolor assumenda velit architecto natus dignissimos ducimus, aperiam neque, vero enim autem dicta iste fugit consectetur? Cupiditate, quibusdam.</span>
                </div>    
            <div className="flex flex-col justify-center items-center border-2 p-5 border-gray-200">
                <img src={img5}/>
                <span>LOREM</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit voluptatum est similique ratione quam necessitatibus, assumenda corrupti aut qui voluptate veritatis mollitia, nulla, accusantium maiores eligendi ea laudantium. Ex, voluptates.</span>
                </div>



            </div>
            </div>

        </Fragment>

    )
  
    }
    
    
export default Sec;