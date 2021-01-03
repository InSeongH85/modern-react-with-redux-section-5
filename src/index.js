import React from 'react';
import ReactDOM from 'react-dom';
// https://developer.mozilla.org/ko/docs/WebAPI/Using_geolocation

class App extends React.Component {
  constructor(props) {
    super(props);
    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position =>  {
        // We called setState!!
        this.setState({ lat: position.coords.latitude });

        //We did not!!
        // this.state.lat = position.coords.latitude;
      },
      error => console.error(error)
    );

  }
  
  // React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(<App />,  document.querySelector('#root'))