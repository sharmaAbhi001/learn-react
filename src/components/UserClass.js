import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     userInfo:{
        name:"DbummyName",
        Location:"dummyLoaction",
     }
    };

    console.log("child constructor");
    

  }

async componentDidMount()
  {
    
 const data = await fetch("https://api.github.com/users/Prince-singh9554")
 const json = await data.json();
 this.setState({
    userInfo:json,
 })    
  }

  render() {

console.log("child did rendr");
console.log(this.state.userInfo);

    
 const { login, location ,avatar_url } = this.state.userInfo
 return (
   <div className="user-about">
    <img src={avatar_url}></img>
     <h2>{login}</h2>
     <h3>{location}</h3>
     <h3>Work</h3>
   </div>)

  }
}

export default UserClass;
