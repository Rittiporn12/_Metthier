import React from "react";
import { useNavigate } from "react-router-dom";

import "./Parking_Information.css";

import LogoMetthierMaster from '../../assets/IMG/Parking_Profile/metthier_master.png';
function Parking_Information() {
  let navigate = useNavigate();

  return (
    <div className="parking-information-container">
      <button
        className="parking-information-chevron"
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-information-title">
        <span className="parking-information-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-information-background"></div>
      <div className="parking-information-body">
          <img src={LogoMetthierMaster} alt="LogoMetthierMaster" />
          <p className="parking-information-version">V.1.0.0</p>
      </div>
        
    </div>
  );
}

export default Parking_Information;
