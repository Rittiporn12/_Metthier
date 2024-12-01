import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import "./Parking_Resetpassword.css";

import LogoMain from "../../../assets/IMG/Parking_Profile/metthier_logo.png";

function Parking_Resetpassword() {
  let navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <div className="parking-resetpassword-container">
      <button className="parking-account-chevron" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-resetpassword-logo">
        <img src={LogoMain} alt="Logomain" />
      </div>

      <div className="parking-resetpassword-background"></div>

      <div className="parking-resetpassword-body">
        <div className="parking-resetpassword-body-about">
          <div id="parking-resetpassword-body-name">{t("resetPassword")}</div>
          <div id="parking-resetpassword-body-description">
            {t("enterDetails")}
          </div>
        </div>

        <div className="parking-resetpassword-body-input">
          <input type="text" id="parking-resetpassword-body-user" />
          <span id="parking-resetpassword-body-username">{t("username")}</span>
        </div>

        <div className="parking-resetpassword-body-input">
          <input type="text" id="parking-resetpassword-body-user" />
          <span id="parking-resetpassword-body-username">{t("phoneNumber")}</span>
        </div>

        <div className="parking-resetpassword-body-button">
          <button
            id="parking-resetpassword-body-signin"
            onClick={() => navigate("/resetverify")}
          >
            {t("next")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Parking_Resetpassword;
