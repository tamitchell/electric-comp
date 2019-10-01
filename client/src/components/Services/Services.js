import React from "react";
import MainServices from './MainServices';
import AdditionalServices from './AdditionalServices';

const Services = () => {
  return (
    <div className="services-container">
      <MainServices />
      <AdditionalServices />
    </div>
  );
};

export default Services;
