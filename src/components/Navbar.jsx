import react from 'react';
import logo from './../Assets/logo.jpg'


const Navbar=() => {
    return (
     
          <div className=" flex flex-row flex justify-between items-center bg-red-600 px-10 border-b border-gray-200">
            <div className="flex flex-1 justify-start">
              <img src={logo} className="h-20 w-20" />
                          <div className="flex text-2xl py-5"><span>PIZZAMANIA</span></div>
            </div>

            <div className="flex flex-1 items-center justify-end ">
            <nav className="space-x-10 flex">
              <a className="text-sm">HOME</a>
              <a className="text-sm">ABOUT PIZZA</a>
              <a className="text-sm">PIZZA TYPES</a>
            </nav>
            
          </div>
        </div>
   

          

    )


}

export default Navbar;
