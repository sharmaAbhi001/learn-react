import { LOGO_URL } from "../utils/constenets";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useState,useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

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
      <div className="header flex justify-between w-lvw h-[80px] bg-green-300">
        <div className="logo">
          <img className="w-20 ml-2"
            src={LOGO_URL}
            alt="logo-img"
          ></img>
        </div>
        <div className="nav-item w-1/2 flex justify-center items-center ">
          <ul className="flex p-4 m-4 gap-8">
            <li> Online Status {onlineStatus ? "✅" :"🔴" }</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/cart">Cart({cartIems.length})items</Link></li>
            <button className="loginbtn" onClick={toggleButtenHandler}>{toggleButten}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;