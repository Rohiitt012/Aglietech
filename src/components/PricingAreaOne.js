import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import serviceList from '../scripts/serviceList';

const PricingAreaOne = () => {
  // Divide services into 3 groups of 5
  const plan1Services = serviceList.slice(0, 5);
  const plan2Services = serviceList.slice(5, 10);
  const plan3Services = serviceList.slice(10, 15);

  return (
    <>
      {/* Pricing Area One start */}
      <div className="pricing-area  pricing-area_1  pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">Pricing plan</h6>
            <h2 className="title">
              Best plane to get our <span>Services</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3">
                <h2 className="mb-3">
                  ₹21111 <sub>/mo</sub>
                </h2>
                <h5>Started</h5>
                <ul>
                  {plan1Services.map((service, index) => (
                    <li key={index}>
                      <FaCheck />
                      {service.title}
                    </li>
                  ))}
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Started
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3 price-active">
                <h2 className="mb-3">
                  ₹21111 <sub>/mo</sub>
                </h2>
                <h5>Started</h5>
                <ul>
                  {plan2Services.map((service, index) => (
                    <li key={index}>
                      <FaCheck />
                      {service.title}
                    </li>
                  ))}
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Started
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3">
                <h2 className="mb-3">
                  ₹21111 <sub>/mo</sub>
                </h2>
                <h5>Started</h5>
                <ul>
                  {plan3Services.map((service, index) => (
                    <li key={index}>
                      <FaCheck />
                      {service.title}
                    </li>
                  ))}
                </ul>
                <Link
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Area One start */}
    </>
  );
};

export default PricingAreaOne;
