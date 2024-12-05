
const User = (props)=>{
 
    const {name , location} = props;

   return (
    <div className="user-about">
    <h2>{name}</h2>
    <h3>{location}</h3>
    <h3>Work</h3>
</div>
   );
}


export default User;