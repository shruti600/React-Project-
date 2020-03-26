import React, { Component } from 'react';
import {FaAlignJustify, FaSadCry} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';
import logo from '../images/logo.jpg';
import { Form,FormControl,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state={
    isOpen:false,
    islogged:false
  };
  render() {
    return (
      /*<nav className="navbar" style={{position:'fixed',justifyContent:'space-between'}}>
        <div className="nav-header">
            <button type="button" className="nav-btn" onClick={this.props.click}>
              <FaAlignJustify className="nav-icon" />
            </button>
            <img style={{width: '50px', height: '50px'}} className="nav-logo" src={logo} alt="Raps" />
            <div className="name"><a href="/">Raps</a></div>
            <div></div>
            
            <div className="nav-items">
                <ul>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Support</a></li>
                </ul>
            </div>
            <Form inline >
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
        </div>
      </nav>*/
      
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{position:'fixed'}}>
        <button type="button" className="nav-btn" onClick={this.props.click}>
              <FaAlignJustify className="nav-icon" />
            </button>
        <a className="navbar-brand" href="#" style={{display:'flex'}}>
         <img style={{width: '50px', height: '50px'}} className="nav-logo" src={logo} alt="Raps" />
            <div className="name"><a href="/">Raps</a></div>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white text-uppercase ml-5" to="/">Home
                <FaHome style={{fontSize:'20px',textAlign:'center',marginLeft:'0.3rem',marginBottom:'0.4rem'}} /><span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase ml-5" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase ml-5" to="/contact">Contact Us</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase ml-5" to="/login" onClick={this.props.log}>Login / SignUp</Link>
            </li> 
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      
    );
  }
}
