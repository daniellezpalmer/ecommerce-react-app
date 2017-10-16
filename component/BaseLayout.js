import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="BaseLayout">
        <div>
          <div>
            <NavLink exact to="/">Diapers R Us!
            </NavLink>
          </div><br></br>
          <NavLink to="/home">Home
          </NavLink>
          <NavLink to="/cloth">Cloth Diapers
          </NavLink>
          <NavLink to="/pottytraining">Potty Training
          </NavLink>
          <NavLink to="/swim">Swim Diapers
          </NavLink>
          <div>
          <NavLink to="/about">About
        </NavLink> &
          <NavLink to="/contact">   Contact
          </NavLink>
        </div>
      </div><div>
        {this.props.children}
      </div>
        <footer>
          Diapers R Us LLC 2017
        </footer>
      </div>
    );
  }
}
