import React, { Component } from 'react';

export default class Contact extends Component {

  render() {

    let style = {
      fontFamily:"Amatic SC",
      fontSize:70,
      textAlign:"center",
      margin:"10%"
    }

    return (
      <div style={style} className="Contact">
        For questions or concerns please contact us at:<br></br>
        PHONE: (512) 555 5555<br></br>
        EMAIL: babiesrus@example.com<br></br>
        ADDRESS: 1234 Example Ln Austin, TX 78704<br></br>
      </div>
    );
  }
}
