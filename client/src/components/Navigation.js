import React, {Component} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import ContactUsModal from './ContactUsModal';
import {constants} from './constants'

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

     UNSAFE_componentWillReceiveProps() {
        if(this.state.isOpen){this.toggle()}
      }
      render(){
        let home = '/' 
        let otherUrl = this.props.location.pathname

          return (
            <nav className={home === otherUrl ? "nav-alt" : ""}>
            <Navbar color="faded" expand="md">
              <NavbarToggler onClick={this.toggle} className="mr-2 navbar-dark" />


              <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar className={home === otherUrl ? "nav-default" : ""}>

              {/* ONLY APPEARS ON HOMEPAGE */}
              <div className={home === otherUrl ? "d-none" : "align-left"}>
              <NavbarBrand className={home === otherUrl ? "" : "d-none d-md-flex div-brand-alt"} href="/"><img className="logo-img" src={constants.COMPANY_LOGO} alt={constants.COMPANY_TITLE}/><p>{constants.COMPANY_TITLE}</p></NavbarBrand>
                </div>

                {/* CENTERS ON HOMEPAGE, RIGHT ALIGNS ON OTHERS */}
                <div className={home === otherUrl ? "centered-nav" : "align-right"}>
                <NavItem>
                  <Link to="/about">Who We Are</Link>
                </NavItem>
                <NavItem>
                  <Link to="/services">What We Do</Link>
                </NavItem> 
              <NavbarBrand className={home === otherUrl ? "div__brand d-none d-md-block" : "d-none"} href="/"><img className="logo-img" src={constants.COMPANY_LOGO} alt={constants.COMPANY_TITLE}/></NavbarBrand>
                 <NavItem>
                  <Link to="/experience">Our Experience</Link>
                </NavItem>
                <div className={home === otherUrl ? "btn__contact-home" : "btn__contact"}>
                  <ContactUsModal/>
                </div>
                </div>


              </Nav>
              </Collapse>
            </Navbar>
            </nav>
  );
};
}

export default withRouter(Navigation)