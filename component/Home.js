import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Home">
        Your one stop shop for all your diapering needs!<br></br>
      </div>
    );
  }
}
