import { LOGO_URL } from "../utils/constenets";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useState,useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

   const [nav, setNav] = useState(false);
  
    const showNav = () => {
      setNav(!nav);
    };

  const cartIems =useSelector((state) => state.cart.items);
  console.log(cartIems);
  
  const     [toggleButten,settoggleButten]  = useState("Login");

  const onlineStatus = useOnlineStatus()


  // function for toggle button
  const toggleButtenHandler = () =>{
   if(toggleButten==="Login")
   {
    settoggleButten("Logout");
   }
   else{
    settoggleButten("Login")
   }
  };

    return (
      <div className="bg-gray-100 flex justify-around items-center py-[25px] border-2 border-b-black ">
        <div className="logo">
          <img className="w-20 ml-2"
            src={LOGO_URL}
            alt="logo-img"
          ></img>
        </div>
        {/* for desktop */}
        <nav className="nav-item hidden md:flex gap-5">
            <li> Online Status {onlineStatus ? "✅" :"🔴" }</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/cart">Cart({cartIems.length})items</Link></li>
            <button className="loginbtn" onClick={toggleButtenHandler}>{toggleButten}</button>
        </nav>
          
           {/* hamburger */}
        {nav ? (
          // close button
          <i
            className="fixed right-[30px] fa fa-times text-3xl z-50 md:hidden"
            aria-hidden="true"
            onClick={showNav}
          ></i>
        ) : (
          <i
            className="fa fa-bars  md:hidden text-3xl "
            aria-hidden="true"
            onClick={showNav}
          ></i>
        )}


         {/* for mobile */}
        <nav  className={`h-[50vh] fixed top-[0] flex flex-col justify-around items-center w-3/6 md:hidden bg-white bg-opacity-50 z-40 duration-1000 ${
            nav ? "right-[0px]" : "right-[-100vw]"
          } `}>
            <li> Online Status {onlineStatus ? "✅" :"🔴" }</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/cart">Cart({cartIems.length})items</Link></li>
            <button className="loginbtn" onClick={toggleButtenHandler}>{toggleButten}</button>
        </nav>

      </div>
    );
  };

export default Header;