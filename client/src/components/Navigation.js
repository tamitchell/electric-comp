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
import {withRouter} from 'react-router-dom';

const brandLogo = require('../img/diversified_electric_logo.png')

class Navigation extends Component {
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

      componentWillReceiveProps() {
        if(this.state.isOpen){this.toggle()}
      }
      render(){
        let home = '/' 
        let otherUrl = this.props.location.pathname
        

          return (
            <nav className={home === otherUrl ? "nav-alt" : "nav-default"}>
            <Navbar color="faded" expand="md">
            <NavbarBrand className={home === otherUrl ? "div__brand d-none" : "div__brand d-none d-sm-block" } href="/"><img className="logo-img" src={brandLogo} alt="Diversified Electric Services"/> Diversified Electric Services, Inc</NavbarBrand>
              <NavbarToggler onClick={this.toggle} className="mr-2 navbar-dark" />
              <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <Link to="/about">Who We Are</Link>
                </NavItem>
                <NavItem>
                  <Link to="/services">What We Do</Link>
                </NavItem>
              <NavbarBrand className={home === otherUrl ? "div__brand" : "div__brand d-none"} href="/"><img className="logo-img" src={brandLogo} alt="Diversified Electric Services"/></NavbarBrand>
                <NavItem>
                  <Link to="/experience">Our Experience</Link>
                </NavItem>
                <NavItem className={home === otherUrl ? "" : "nav__contact"}>
                  <Link to="/contact">Contact Us</Link>
                </NavItem>
              </Nav>
              </Collapse>
            </Navbar>
            </nav>
  );
};
}

export default withRouter(Navigation)