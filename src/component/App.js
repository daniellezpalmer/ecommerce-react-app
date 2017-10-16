import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/clothh.jpg';

class App extends Component {

  render() {
    let app = {
      textAlign:"center",
      fontSize:40,
      margin:"20px 0px 0px 0px"
    }

    let img = {
      backgroundImage: `url(${image})`,
      height:500,
      backgroundRepeat:"no-repeat",
      display:"flex",
      margin:"2% 30% 0% 35%"
    }

    let link = {
      textDecoration:"none",
      fontSize:120,
      textAlign:"center"
    }

    return (
      <div style={app} className="App">
      <div style={img}></div>
      <Link style={link} exact to="/about">More about us!
      </Link>
      </div>
    );
  }
}

export default App;
