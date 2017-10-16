import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cd extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Cd">
        <div>
            All Things Cloth!<br></br>
            <Link to="/home"><button>Home</button></Link>
<div>
  <div>
  <div>
  </div>
  Cloth Diaper<br></br>
  Color: Osa<br></br>
  Price: $20.95<br></br>
  <button>Purchase</button>
</div>
<div>
  <div>
  </div>
  Cloth Diaper<br></br>
  Color: Chico<br></br>
  Price: $20.95<br></br>
  <button>Purchase</button>
</div>
<div>
  <div>
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
