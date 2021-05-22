import React, { Component } from 'react';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Link to="/">
        <div className="header">
          <p>
            <i className="fa fa-home"></i>
          </p>
        </div>
      </Link>
    );
  }
}

export default Header;
