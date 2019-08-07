import React from "react";
class MyMap extends React.Component {

  render() {
    const { compose, withProps, lifecycle } = require("recompose");

    const {
      withScriptjs,
      withGoogleMap,
      GoogleMap,
      Marker
    } = require("react-google-maps");
    const UsersMap = compose(
      withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyBht5Low4uRnWs5MUcGoBnE3nvcG31AxUU&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
      }),
      withScriptjs,
      withGoogleMap
    )(props => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={
          new window.google.maps.LatLng(this.props.lat, this.props.lng)
        }
        >
 { //curly brace here lets you write javscript in JSX
        this.props.user.favoritePlaces.map(location =>
            <Marker
              icon={"http://maps.google.com/mapfiles/ms/icons/red.png"}
              key={location._id}
              title={location.name}
              name={location.name}
              position={{ lat: location.lat, lng: location.lng }}
            />
        )
      }    
      { //curly brace here lets you write javscript in JSX
        this.props.user.upcomingEvents.map(event =>
            <Marker
              icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}
              key={event.location._id}
              title={event.location.name}
              name={event.location.name}
              position={{ lat: event.location.lat, lng: event.location.lng }}
            />
        )
      }   
       </GoogleMap>
    ));

    return <UsersMap />;
  }
}
export default MyMap;
