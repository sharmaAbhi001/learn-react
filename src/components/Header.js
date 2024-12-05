import { LOGO_URL } from "../utils/constenets";
import { Link } from "react-router";
import { useState,useEffect } from "react";


const Header = () => {

  const     [toggleButten,settoggleButten]  = useState("Login")

  useEffect(()=>{console.log("use feect render")
  },[]);

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
      <div className="header">
        <div className="logo">
          <img
            src={LOGO_URL}
            alt="logo-img"
          ></img>
        </div>
        <div className="nav-item">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
            <button className="loginbtn" onClick={toggleButtenHandler}>{toggleButten}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;