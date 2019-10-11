import React from "react";
import {Link} from 'react-router-dom'

const brandLogo = require('../img/diversified_electric_logo.png')

const Footer = () => {
  return (
    <div className="footer">       
      <div className="footer__inner footer__navigation">
        <div className="footer__brand div__brand">
        <Link to="/"><img className="footer__brand__img" src={brandLogo} alt="Diversified Electric Services"/></Link>
          <p>Diversified Electric Services, Inc</p>
        </div>
        <div className="footer__links">
        <Link to="/about">Who We Are</Link> |
        <Link to="/services">What We Do</Link> 
        {/* <Link to="/experience">Our Experience</Link> | */}
        {/* <Link to="/contact">Contact Us</Link> */}
        </div>
        <div className="footer__contact">
          <p>
          5236 Saint Genevieve Place <br/>
Alexandria, VA 22315 <br/>
<a href="tel:+15713180076"> (571) 318-0076 </a> <br/> <a href="mailto:ntorrico@desielectric.com?subject=ClientQuestion">DESI@DesiElectric.com</a> <br/>
          </p>
        </div>
      </div>
      <div className="footer__inner footer__logistics">
        <div className="footer__copyright">
        <p> 
          © 2019 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            {" "}
            Diversified Electric Services Inc.
          </a>
          {" "}All Rights Reserved. |
       Web Design by <a  href="https://tamitchell.github.io/">Tasha Mitchell</a></p>
        </div>
        <div className="footer__socialmedia">
            <a href="https://twitter.com/"><img className="footer_icon" src={require("../img/social-media-svg/twitter.png")} alt="twitter" /></a>
            <a href="https://www.instagram.com/"><img className="footer_icon" src={require("../img/social-media-svg/instagram.png")} alt="instagram" /></a>
            <a href="https://www.facebook.com/"><img className="footer_icon" src={require("../img/social-media-svg/facebook.png")} alt="facebook" /></a>
            <a href="https://www.linkedin.com/"><img className="footer_icon" src={require("../img/social-media-svg/linkedin-logo.png")} alt="linked in" /></a>
      </div>


      </div>
    </div>
  );
};

export default Footer;
