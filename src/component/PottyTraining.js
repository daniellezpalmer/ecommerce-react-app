import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Pt extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Cd">
        <div>
            All Things Potty Training!<br></br>
            <Link to="/home"><button>Home</button></Link>
<div>
  <div>
  <div>
  </div>
  Training Pants<br></br>
  Color: Night<br></br>
  Price: $10.95<br></br>
  <button>Purchase</button>
</div>
<div>
  <div>
  </div>
  Training Pants<br></br>
  Color: Heroes<br></br>
  Price: $10.95<br></br>
  <button>Purchase</button>
</div>
<div>
  <div>
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
