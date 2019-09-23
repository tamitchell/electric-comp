import React, {Component} from "react";
import StatementPurpose from './StatementPurpose';
import MemberGroup from "./MemberGroup";

export default class About extends Component {


scrollToTop = () => {
    this.el.scrollIntoView({ behavior: "smooth" });
  }



  render() {
    return (
      <section className="about-container ">
        <StatementPurpose ref={(el) => { this.topOfPage = el; }}/>
        <MemberGroup scrollToTop={this.scrollToTop} />
      </section>
    );
  }
}