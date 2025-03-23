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

    

  }

async componentDidMount()
  {
    
 const data = await fetch("https://api.github.com/users/sharmaAbhi001")
 const json = await data.json();
 this.setState({
    userInfo:json,
 })    
  }

  render() {

    
 const { login, location ,avatar_url } = this.state.userInfo
 return (
   <div className="user-about">
    <img className="mx-auto" src={avatar_url}></img>
     <h2 className="bold"> username :<span> {login}</span></h2>
     <h3>{location}</h3>
   </div>)

  }
}

export default UserClass;
