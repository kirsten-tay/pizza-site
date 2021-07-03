import react from 'react';


const Navbar = () => {
    return (
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7x1 mx-auto ">
          <div className="flex justify-between items-center py-5 px-10">
            <div className="flex flex-1 justify-start">
              <img src={logo} className="w-20" />
            </div>
  
            <nav className="space-x-10 flex">
              <a className="text-sm">Prices</a>
              <a className="text-sm">Learn</a>
              <a className="text-sm">Individual</a>
              <a className="text-sm">Businesses</a>
              <a className="text-sm">Developers</a>
              <a className="text-sm">Company</a>
            </nav>

            </div>

            </div>
            </div>

    )


}

export default Navbar;
