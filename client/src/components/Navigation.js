import React, {Component} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import {Link} from 'react-router-dom'
const brandLogo = require('../img/diversified_electric_logo.png')

export default class Navigation extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render(){
        // if (this.props.location.pathname.match('/')){
        //   return null;
        // }
        console.log(this.props.params);
          return (
            <nav className="nav-home">
            <Navbar color="faded" expand="md">
              <NavbarToggler onClick={this.toggle} className="mr-2" />
              <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                {/* <NavItem>
                  <Link to="/about">Who We Are</Link>
                </NavItem>
                <NavItem>
                  <Link to="/services">What We Do</Link>
                </NavItem> */}
              <NavbarBrand className="div__brand" href="/"><img className="logo-img" src={brandLogo} alt="Diversified Electric Services"/></NavbarBrand>
                {/* <NavItem>
                  <Link to="/experience">Our Experience</Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact">Contact Us</Link>
                </NavItem> */}
              </Nav>
              </Collapse>
            </Navbar>
            </nav>
  );
};
}
