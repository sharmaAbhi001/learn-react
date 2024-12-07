import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

   constructor () {
     super()
      console.log("parent constructor");
      
   }

   componentDidMount(){
      console.log("parent did mount");
      
   }

   render (){
      console.log("Parent Render ");
      
      return (
         <div className="about">
          <UserClass name={"Abhi"} location={"GKP"}/>
       </div>
      )
   }
}


export default About;