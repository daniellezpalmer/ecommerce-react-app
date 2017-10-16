import React, { Component } from 'react';
import dipes from '../images/bebe.jpg'

export default class Home extends Component {

  render() {

    let img = {
      backgroundImage:`url(${dipes})`,
      backgroundRepeat:"no-repeat",
      height:1600,
      width:"100%",
      textAlign:"center",
      fontSize:45
    }

    return (
      <div style={img} className="Home">
        Your one stop shop for all your diapering needs!<br></br>
      </div>
    );
  }
}
