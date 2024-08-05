import React from "react";
import { SiTcs } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { SiHcl } from "react-icons/si";

import { FaGoogle } from "react-icons/fa";


const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "TCS",
      location: "Magarpatta Pune, India",
      openPositions: 10,
      icon: <SiTcs />,
    },
    {
      id: 2,
      title: "Apple",
      location: "It Park Bengaluru, India",
      openPositions: 5,
      icon: <FaApple />,
    },
    {
      id: 3,
      title: "Microsoft",
      location: "Andheri Mumbai, India",
      openPositions: 20,
      icon: <TiVendorMicrosoft /> ,
    },
    {
      id: 4,
      title: "HCL",
      location: "Hinjewadi Pune, India",
      openPositions: 10,
      icon:   <SiHcl />      ,
    },
    {
      id: 5,
      title: "Google",
      location: "Kharadi Pune, India",
      openPositions: 10,
      icon: <FaGoogle /> ,
    },
   
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                {/* <button>Open Positions {element.openPositions}</button> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
