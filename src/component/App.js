import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/dipes.png';

class App extends Component {

  render() {

    let img = {
      backgroundImage: `url(${image})`,
      height:500,
      backgroundRepeat:"no-repeat",
      display:"flex",
      margin:"2% 30% 0% 30%"
    }

    return (
      <div className="App">
      Welcome to
      <div style={img}>Diapers R Us</div>
      <Link exact to="/about">More about us!
      </Link>
      </div>
    );
  }
}

export default App;
