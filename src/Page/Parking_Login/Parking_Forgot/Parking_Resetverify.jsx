import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import LogoMain from "../../../assets/IMG/Parking_Profile/metthier_logo.png";

import "./Parking_Resetverify.css";

function Parking_Resetverify() {
  let navigate = useNavigate();

  const { t } = useTranslation();

  const [modalShow, setModalShow] = React.useState(false);

  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )} ${t("verify_min")}`;
  };

  return (
    <div className="parking-resetverify-container">
      <button
        className="parking-resetverify-chevron"
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-resetverify-logo">
        <img src={LogoMain} alt="Logomain" />
      </div>

      <div className="parking-resetverify-background"></div>

      <div className="parking-resetverify-body">
        <div className="parking-resetverify-body-about">
          <div id="parking-resetverify-body-name">{t("verify")}</div>
          <div id="parking-resetverify-body-name">{t("verify_phone")}</div>
          <div id="parking-resetverify-body-description">{t("verifyDesc")}</div>
        </div>

        <div className="paring-resetverify-input-respon">
          <div className="parking-resetverify-input">
            <input
              type="tel"
              id="parking-resetverify-otp"
              maxlength="1"
              required
              pattern="[0-9]"
            />
            <input
              type="tel"
              id="parking-resetverify-otp"
              maxlength="1"
              required
              pattern="[0-9]"
            />
            <input
              type="tel"
              id="parking-resetverify-otp"
              maxlength="1"
              required
              pattern="[0-9]"
            />
            <input
              type="tel"
              id="parking-resetverify-otp"
              maxlength="1"
              required
              pattern="[0-9]"
            />
          </div>
        </div>

        <div className="parking-verify-resend">
          <span id="parking-verify-resend">
            <u>{t("resend")}</u>
          </span>
          <span id="parking-verify-time">{formatTime(timeLeft)}</span>
        </div>

        <div className="parking-signup-body-button">
          <button
            id="parking-signup-body-signin"
            onClick={() => navigate("/resetpasswordinput")}
          >
            {t("next")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Parking_Resetverify;
