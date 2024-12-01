import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Parking_Language.css";

import Thai from "../../assets/IMG/Parking_Profile/ThaiLa.png";
import English from "../../assets/IMG/Parking_Profile/EngLa.png";

const language = [
  { code: "en", lang: "English Language" },
  { code: "th", lang: "Thai Language" },
];

function Parking_Language() {
  let navigate = useNavigate();

  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="parking-language-container">
      <button className="parking-language-chevron" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-language-title">
        <span className="parking-language-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-language-background"></div>
      <div className="parking-language-body">
        {language.map((lang) => {
          return (
            <div id="parking-language-about" key={lang.code}>
              <button
                id="parking-language-thai"
                onClick={() => changeLanguage(lang.code)}
              >
                <img src={lang.code === "en" ? English : Thai} alt="ThaiLa" />
                {lang.lang}
                <div
                  className={`checkbox-icon ${
                    lang.code === i18n.language ? "checked" : ""
                  }`}
                >
                  <i className="bi bi-check2"></i>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Parking_Language;
