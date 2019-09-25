import React from "react";
import MainServices from './MainServices';
import AdditionalServices from './AdditionalServices';

const Services = () => {
  return (
    <section className="services-container">
      <MainServices />
      <AdditionalServices />
    </section>
  );
};

export default Services;
