import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//links to different routes
import './navbar.css'

export default class Navbar extends Component {

  render() {
    return (
      
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <Link to="/" className="navbar-brand">Preggo</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Guidelines</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create New Log</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}