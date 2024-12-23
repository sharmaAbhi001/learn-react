import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

   constructor () {
     super()
    
      
   }

   componentDidMount(){
   
      
   }

   render (){
      
      return (
         <div className="about">
          <UserClass name={"Abhi"} location={"GKP"}/>
       </div>
      )
   }
}


export default About;