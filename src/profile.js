import React from 'react';
import "./App.css"
class Profile extends React.Component {
    constructor(props){
    super(props);
    this.state= {Person : { fullName: "MEJDOUB RANYME",bio: "MY BIO",profession: "student"
    } }}
    
    
    render() {
        return (
        <div>
        <img style={{width:"400px"}} 
           src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.vecteezy.com%2Fart-vectoriel%2F2002257-belle-femme-avatar-personnage-icone&psig=AOvVaw25oJFjZmRoz7v_FVDKfYO4&ust=1639473959628000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCRlcq64PQCFQAAAAAdAAAAABAD"
    alt="My profile Picture !">       
    </img>                  
    <h1>{this.state.Person.fullName}</h1>
    <h1>{this.state.Person.bio} ......</h1>
    <h1>{this.state.Person.profession}</h1>
        </div>
        ) }
    }
    export default Profile;