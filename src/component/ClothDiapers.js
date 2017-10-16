import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img11 from '../images/osacdd.jpg';
import img22 from '../images/chicocdd.jpg';
import img33 from '../images/tophatcdd.jpg';

export default class Cd extends Component {

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

    let img1 = {
    backgroundImage:`url(${img11})`,
    height:300,
    width:300,
    backgroundRepeat:"no-repeat"
    }

    let img2 = {
    backgroundImage:`url(${img22})`,
    height:300,
    width:300,
    backgroundRepeat:"no-repeat"
    }

    let img3 = {
    backgroundImage:`url(${img33})`,
    height:300,
    width:300,
    backgroundRepeat:"no-repeat"
    }

    return (
      <div className="Cd">
        <div style={title}>
            All Things Cloth!<br></br>
            <Link to="/home"><button>Home</button></Link>
    <div style={cd}>
    <div style={divs}>
    <div style={img1}>
    </div>
    Cloth Diaper<br></br>
    Color: Osa<br></br>
    Price: $20.95<br></br>
    <button>Purchase</button>
    </div>
    <div style={divs}>
    <div style={img2}>
    </div>
    Cloth Diaper<br></br>
    Color: Chico<br></br>
    Price: $20.95<br></br>
    <button>Purchase</button>
    </div>
    <div style={divs}>
    <div style={img3}>
    </div>
    Cloth Diaper<br></br>
    Color: TopHat<br></br>
    Price: $20.95<br></br>
    <button>Purchase</button>
    </div>
    </div>
      </div>
    </div>
    );
  }
}
