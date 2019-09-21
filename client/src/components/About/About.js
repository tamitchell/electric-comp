import React, {Component} from "react";
import StatementPurpose from './StatementPurpose';
import MemberGroup from "./MemberGroup";

export default class About extends Component {


  render() {
    return (
      <section className="about-container ">
        <StatementPurpose />
        <MemberGroup />
      </section>
    );
  }
}
