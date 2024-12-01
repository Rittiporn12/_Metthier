import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import "./Parking_Signup.css";

import LogoMain from "../../assets/IMG/Parking_Profile/metthier_logo.png";

function Parking_Signup() {
  let navigate = useNavigate();

  const { t } = useTranslation();

  const [isMemberChecked, setIsMemberChecked] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  function handleMemberChange(event) {
    setIsMemberChecked(event.target.checked);
  }

  return (
    <div className="parking-signup-container">
      <button className="parking-account-chevron" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-signup-logo">
        <img src={LogoMain} alt="Logomain" />
      </div>

      <div className="parking-signup-background"></div>

      <div className="parking-signup-body">
        <div className="parking-signup-body-about">
          <div id="parking-signup-body-name">{t("getStart")}</div>
          <div id="parking-signup-body-description">
            {t("enterDetails")}
          </div>
        </div>

        <div className="parking-signup-body-input">
          <input type="text" id="parking-signup-body-user" />
          <span id="parking-signup-body-username">{t("username")}</span>
        </div>

        <div className="parking-signup-body-input">
          <input type="text" id="parking-signup-body-user" />
          <span id="parking-signup-body-username">{t("yourname")}</span>
        </div>

        <div className="parking-signup-body-input">
          <input type="tel" id="parking-signup-body-user" />
          <span id="parking-signup-body-username">{t("phoneNumber")}</span>
        </div>

        <div className="parking-signup-body-input">
          <input
            type={showPassword ? "text" : "password"}
            id="parking-signup-body-user"
          />
          <span id="parking-signup-body-username">{t("password")}</span>
        </div>

        {isMemberChecked &&  <div className="parking-signup-body-input">
          <input type="text" id="parking-signup-body-user" />
          <span id="parking-signup-body-username">{t("memberID")}</span>
        </div>}

        <div className="parking-signup-button-member">
          <span>{t("signUp_member")}</span>
          <input type="checkbox" name="member1" id="member1" onChange={handleMemberChange} />
        </div>

        <div className="parking-signup-body-button">

            <button id="parking-signup-body-signin" onClick={() => navigate("/verify")}>
                <i className="bi bi-person-circle"></i>
                {t("signUp")}
            </button>
        </div>

      </div>
    </div>
  );
}

export default Parking_Signup;
