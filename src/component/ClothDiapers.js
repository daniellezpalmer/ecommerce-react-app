import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img11 from '../images/osacdd.jpg';
import img22 from '../images/chicocdd.jpg';
import img33 from '../images/tophatcdd.jpg';

export default class Cd extends Component {

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
