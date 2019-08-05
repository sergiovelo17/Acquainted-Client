import React, { Component } from "react";
import "../useroptions/useroptions.css";
import { Route, Link, Switch } from "react-router-dom";
import AuthService from "../../services/AuthService";
import Details from '../details/details'
import axios from "axios";
import '../details/details.css';
import Moment from 'react-moment';

class EventDetails extends Component {
  state = {
    eventdetails: null,
    stopReload: false
  }
  service = new AuthService();
  showEventDetails = () => {
    console.log('working')
    return(
    <div>
    <div className="container">
    <div className="row">
    <div className="col s12 m5">
    <h2>{this.state.eventdetails.title}</h2>
    <Moment format="MM/DD/YYYY hh:mm a">{this.state.eventdetails.time}</Moment>
    <p>Event details: {this.state.eventdetails.description}</p>
    </div>
    </div>
    </div>
    <h4>Location Details</h4>
    <Details ready={this.props.ready} placeDetailsId={this.state.eventdetails.location.placeId}/>
    </div>
    )
  }
  getEventDetails = () => {
    if(!this.state.stopReload){
    axios.get(`http://localhost:5000/api/events/getSingleEvent/${this.props.match.params.id}`)
    .then((response)=>{
      console.log('------------',response)
      this.setState({eventdetails: response.data, stopReload: true})
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  }
  render() {
    if (this.props.ready)
      return (
        <div>
          <div id="events-for-user"className="row">
            {this.getEventDetails()}
            {this.state.eventdetails && 
            this.showEventDetails()
            }
          </div>
        </div>
      );
    else return <h1>Loading</h1>;
  }
}

export default EventDetails;
