import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sd extends Component {

  render() {
    return (
      <div className="Cd">
        <div>
            All Things Swim!<br></br>
            <Link to="/home"><button>Home</button></Link>

<div>
  <div>
  <div>
  </div>
  Swim Diaper<br></br>
  Color: Sailor<br></br>
  Price: $10.95<br></br>
  <button>Purchase</button>
</div>
<div>
  <div>
  </div>
  Swim Diaper<br></br>
  Color: Pink<br></br>
  Price: $10.95<br></br>
  <button>Purchase</button>
</div>
<div>
  <div>
  </div>
  Swim Diaper<br></br>
  Color: Flowers<br></br>
  Price: $10.95<br></br>
  <button>Purchase</button>
</div>
</div>
      </div>
    </div>
    );
  }
}
