import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import AuthService from '../../services/AuthService';

class Profile extends Component{
  state={
   
  }
  service = new AuthService();
  

  render(){
    return(
      <form onSubmit={this.submitSignup}>
        
        </form>
    )
  }

}

export default Profile