import React, { Component } from 'react';

xport default class Contact extends Component {
  constructor(props){
    super(props);
  };
  render() {
    return (
      <div className="Contact">
        For questions or concerns please contact us at:<br></br>
        PHONE: (512) 555 5555<br></br>
        EMAIL: babiesrus@example.com<br></br>
        ADDRESS: 1234 Example Ln Austin, TX 78704<br></br>
      </div>
    );
  }
}
