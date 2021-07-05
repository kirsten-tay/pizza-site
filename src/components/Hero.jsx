import react, {Fragment} from 'react';
import img8 from './../Assets/img8.jpg';
import img2 from './../Assets/img2.jpg';



const Hero=(Hero)=>{
    return(
        <Fragment>
    
            <div className="flex flex-row flex-1 justify-around items-center    space-x-10">
            <div className="flex flex-col  justify-center items-center mx-60  transform rotate-90 ...border-2 p-5 border-gray-200">
    <div className="carousel-example-generic" class="carousel slide" data-ride="carousel">
  
  <ol className="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  
      <div className="carousel-inner" role="listbox">
         <div className="item active">
          <img src={img8}/>
           <div class="carousel-caption">
        ...
           </div>
          </div>
         <div class="item ">
          <img src={img2} />
           <div class="carousel-caption">
        ...
           </div>
          </div>
       </div>

      <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    
  </div> 




             <div className="flex flex-col justify-center  text-3xl  items-center">
                        <span>ABOUT US</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <span> Enim eum dolor voluptatum. Totam nam optio veritatis ad distinctio itaque dolor corporis, fugit a eius sapiente quas eveniet aliquid, quidem nesciunt?</span>
                    </div>
             </div>
         </Fragment>
    )
  
    }
    
    

export default Hero;    


