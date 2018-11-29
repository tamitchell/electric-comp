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
          return (
            <nav>
            <Navbar className="navigation" color="faded" expand="md">
              <NavbarBrand href="/">Diverse Electric</NavbarBrand>
              <NavbarToggler onClick={this.toggle} className="mr-2" />
              <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/pricing">Pricing</Link>
                </NavItem>
                <NavItem>
                  <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact">Contact</Link>
                </NavItem>
              </Nav>
              </Collapse>
            </Navbar>
            </nav>
  );
};
}
