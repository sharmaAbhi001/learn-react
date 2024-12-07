import { useState } from "react";
const User = (props)=>{
 
    const [count] = useState(0);
    const [count2] = useState(5);
    const {name , location} = props;

   return (
    <div className="user-about">
        <h2>state={count}</h2>
        <h2>{count2}</h2>
    <h2>{name}</h2>
    <h3>{location}</h3>
    <h3>Work</h3>
</div>
   );
}


export default User;