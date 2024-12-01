import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Parking_Editprofile.css";


function Parking_Editprofile({ userData, setUserData }) {
  let navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    } else {
      setUserData(userData);
    }
  }, []);

  const [disabled, setDisabled] = React.useState(true);

  const firstnameInput = useRef(null);
  const lastnameInput = useRef(null);
  const phoneInput = useRef(null);

  function enterEditmode() {
    setDisabled(!disabled);

    if (!disabled) {
      const updatedData = {
        ...userData,
        firstname: firstnameInput.current.value.trim() || userData.firstname,
        lastname: lastnameInput.current.value.trim() || userData.lastname,
        phone: phoneInput.current.value.trim() || userData.phone,
      };

      setUserData(updatedData);
      localStorage.setItem("userData", JSON.stringify(updatedData));
    }
  }

  return (
    <div className="parking-editprofile-container">
      <button
        className="parking-editprofile-chevron"
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-editprofile-title">
        <span className="parking-editprofile-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-editprofile-profile">
        <i className="bi bi-person-circle"></i>
      </div>

      <div className="parking-editprofile-background"></div>
      <div className="parking-editprofile-body">
        <div id="parking-editprofile-body">
          <span id="parking-editprofile-body-name">{t("editprofile_title")}</span>
          <span id="parking-editprofile-body-description">
          {t("editprofile_des")}
          </span>

          <div className="parking-editprofile-info">
            <div className="parking-editprofile-info-name">
              <span id="parking-editprofile-info-bar">{t("editprofile_first")}</span>
              <input
                type="text"
                id="parking-editprofile-info-name"
                className="borderless"
                placeholder={userData.firstname}
                disabled={disabled}
                ref={firstnameInput}
              />
            </div>
          </div>
          <div className="parking-editprofile-info-1">
            <div className="parking-editprofile-info-lastname">
              <span id="parking-editprofile-info-bar">{t("editprofile_last")}</span>
              <input
                type="text"
                id="parking-editprofile-info-lastname"
                className="borderless"
                placeholder={userData.lastname}
                disabled={disabled}
                ref={lastnameInput}
              />
            </div>
          </div>
          <div className="parking-editprofile-info-1">
            <div className="parking-editprofile-info-lastname">
              <span id="parking-editprofile-info-bar">{t("editprofile_title")}</span>
              <input
                type="tel"
                id="parking-editprofile-info-phone"
                className="borderless"
                placeholder={userData.phone}
                disabled={disabled}
                ref={phoneInput}
              />
            </div>
          </div>

          <div className="parking-editprofile-button">
            <button
              id="parking-editprofile-button"
              onClick={() => enterEditmode()}
            >
              {disabled ? t("editprofile_edit") : t("editprofile_save")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parking_Editprofile;
