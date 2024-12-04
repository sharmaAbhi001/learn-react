import { LOGO_URL } from "../utils/constenets";
import { useState,useEffect } from "react";


const Header = () => {

  const     [toggleButten,settoggleButten]  = useState("Login")

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
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
            <li>Cart</li>
            <button className="loginbtn" onClick={toggleButtenHandler}>{toggleButten}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;