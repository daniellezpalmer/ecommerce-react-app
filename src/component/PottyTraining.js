import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img111 from '../images/pinkptt.jpg';
import img222 from '../images/herosptt.jpg';
import img333 from '../images/rainbowptt.jpg';

export default class Pt extends Component {

  render() {

    let title = {
      textAlign:"center",
      fontSize:60
    }

    let cd = {
      display:"flex",
      textAlign:"center",
      justifyContent:"space-around"
    }

    let divs = {
      textAlign:"center",
      fontSize:40
    }

    let img11 = {
    backgroundImage:`url(${img111})`,
    height:300,
    width:300,
    backgroundRepeat:"no-repeat"
    }

    let img22 = {
    backgroundImage:`url(${img222})`,
    height:300,
    width:300,
    backgroundRepeat:"no-repeat"
    }

    let img33 = {
    backgroundImage:`url(${img333})`,
    height:300,
    width:300,
    backgroundRepeat:"no-repeat"
    }

    return (
      <div className="Cd">
        <div style={title}>
            All Things Potty Training!<br></br>
            <Link to="/home"><button>Home</button></Link>
  <div style={cd}>
  <div style={divs}>
  <div style={img11}>
  </div>
  Training Pants<br></br>
  Color: Night<br></br>
  Price: $10.95<br></br>
  <button>Purchase</button>
  </div>
  <div style={divs}>
  <div style={img22}>
  </div>
  Training Pants<br></br>
  Color: Heroes<br></br>
  Price: $10.95<br></br>
  <button>Purchase</button>
  </div>
  <div style={divs}>
  <div style={img33}>
  </div>
  Training Pants<br></br>
  Color: Rainbow<br></br>
  Price: $10.95<br></br>
  <button>Purchase</button>
  </div>
  </div>
      </div>
    </div>
    );
  }
}
