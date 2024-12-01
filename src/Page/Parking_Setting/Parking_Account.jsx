import React from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import "./Parking_Account.css";

import LogoMetthier from "../../assets/IMG/Parking_Profile/metthier_logo.png";

function Parking_Account( {userData} ) {
  let navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="parking-account-container">
      <button className="parking-account-chevron" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-account-title">
        <span className="parking-account-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-account-logo">
        <img src={LogoMetthier} alt="LogoMetthier" />
      </div>

      <div className="parking-account-background"></div>
      <div className="parking-account-body">
        <div className="parking-account-body-name">
          <span id="parking-account-body-name">{t('accountSecurity')}</span> <br />
          <span id="parking-account-body-des">{t('editOrImprove')}</span>
        </div>

        <div className="parking-account-body-about">
          <div id="parking-account-about">
            <span id="parking-account-text">{t('username')}</span>
            <div className="parking-account-left-section">
              <span id="parking-account-text-01">Pichit_Sri</span>
              <i className="bi bi-chevron-right chevron-icon-account"></i>
            </div>
          </div>
        </div>

        <hr />

        <div className="parking-account-body-about">
          <div id="parking-account-about">
            <span id="parking-account-text">{t('telephone')}</span>
            <div className="parking-account-left-section">
              <span id="parking-account-text-01">********78</span>
              <i className="bi bi-chevron-right chevron-icon-account"></i>
            </div>
          </div>
        </div>

        <hr />

        <div className="parking-account-body-about">
          <div id="parking-account-about">
            <span id="parking-account-text">{t('accLinkSocial')}</span>
            <div className="parking-account-left-section">
              <i className="bi bi-chevron-right chevron-icon-account"></i>
            </div>
          </div>
        </div>

        <hr />

        <div className="parking-account-body-about">
          <div id="parking-account-about">
            <span id="parking-account-text">{t('changePassword')}</span>
            <div className="parking-account-left-section">
              <i className="bi bi-chevron-right chevron-icon-account"></i>
            </div>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
}

export default Parking_Account;
