import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
  };
  render() {
    return (
      <div className="App">
      Welcome to
      <div>Diapers R Us</div>
      <Link exact to="/about">More about us!
      </Link>
      </div>
    );
  }
}

export default App;
