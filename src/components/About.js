import User from "./User";
import UserClass from "./UserClass";

const About =()=>{
    return( 
       <div className="about">
          <User name={"Abhi"} location={"GKP"}/>
          <UserClass name={"Abhi"} location={"GKP"}/>
       </div>
    );
}

export default About;