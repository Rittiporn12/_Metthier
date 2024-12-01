import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import moment from "moment";

import "./Parking_Findzone.css";

import Parking_Zone from "../../assets/IMG/Parking_Zone/Parking_Zone.png";
import findZone from "../../Data/findzone.jsx";

function Parking_Findzone() {
  let navigate = useNavigate();
  const { t } = useTranslation();

  const [zone, setZone] = useState("A");

  const handleZoneChange = (newZone) => {
    setZone(newZone);
  };

  const calculateFreeParking = (parking, limit) => {
    if (isNaN(parking) || isNaN(limit) || limit === 0) {
      return 0;
    }

    const availableParking = limit - parking;
    return ((availableParking / limit) * 100).toFixed(2);
  };

  const [showDateModal, setShowDateModal] = useState(false);

  const toggleDateModal = () => {
    setShowDateModal(!showDateModal);
  };

  function chanceOnData(time) {
    document.getElementById("findzone-number").innerHTML =
    t("findzone_modal_on")+ moment(time).format("DD/MM/YYYY");
    document.getElementById("findzone-chance").innerHTML =
    t("findzone_modal_chance") +
      calculateFreeParking(
        Math.floor(Math.random() * findZone[zone].limit),
        findZone[zone].limit
      ) +
      "%";
  }

  return (
    <div className="findzone-container">
      <div className="parking-findzone-title">
        <button
          className="parking-findzone-chevron"
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <span className="parking-findzone-name">
          Smart Parking <br />
        </span>
      </div>

      {/* findZone Tabs */}
      <div className="findzone-menu">
        {Object.keys(findZone).map((zoneKey) => (
          <button
            id="findzone-menu-button"
            key={zoneKey}
            className={`zone-tab ${zone === zoneKey ? "zone-active" : ""}`}
            onClick={() => handleZoneChange(zoneKey)}
          >
            {t("findzone_zone")} {findZone[zoneKey].name} <br />{" "}
            <span id="findzone-menu-description">
              {findZone[zoneKey].limit - findZone[zoneKey].parking}
            </span>
          </button>
        ))}

        <button id="findzone-menu-button2">
          {t("findzone_zone")} D <br /> 0
        </button>
      </div>

      {/* findZone Content */}
      <div className="findzone-content">
        <div className="findzone-date">
          <button
            id="findzone-date"
            className="bi bi-calendar-fill"
            onClick={toggleDateModal}
          >
            &nbsp;{t("findzone_date")}
          </button>
        </div>

        <div className="findzone-content-center">
          <div
            className={`findzone-content-all ${showDateModal ? "shrink" : ""}`}
          >
            <img src={Parking_Zone} alt="Parking_Zone" id="findzone-img" />

            <div className="findzone-signal-container">
              <div className="findzone-signal-circle1"></div>
              <div className="findzone-signal-circle2"></div>
              <div className="findzone-signal-circle3"></div>
            </div>

            <div className="findzone-content-title">
              <p className={`findzone-zone ${showDateModal ? "shrink" : ""}`}>
                {t("findzone_zone")} {findZone[zone].name}
              </p>
              <p
                id="findzone-number"
                className={`findzone-number ${showDateModal ? "shrink" : ""}`}
              >
                {t("findzone_numberof")}: {findZone[zone].parking} /{" "}
                {findZone[zone].limit}
              </p>
              <p
                id="findzone-chance"
                className={`findzone-chance ${showDateModal ? "shrink" : ""}`}
              >
                {t("findzone_nowchance")}{" "}
                <span
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  {calculateFreeParking(
                    findZone[zone].parking,
                    findZone[zone].limit
                  )}
                  %
                </span>{" "}
                {t("findzone_chance")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {showDateModal && (
        <div className="findzone-date-modal">
          <div className="findzone-data-background-description"></div>
          <div className="findzone-data-background-main">
            <div className="findzone-date-selectdate">
                {t("findzone_selectdate")}
            </div>

            <input type="date" id="findzone-date-input" />

            <div className="findzone-date-selecttime">
              {t("findzone_selecttime")}
            </div>

            <div className="findzone-date-time">
              <input
                type="radio"
                class="btn-check"
                name="options"
                id="option1"
                autoComplete="on"
              />
              <label
                class="btn btn-outline-secondary select-time-font"
                for="option1"
              >
                6AM-8AM <i className="bi bi-clock"></i>
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options"
                id="option2"
                autoComplete="off"
              />
              <label
                class="btn btn-outline-secondary select-time-font"
                for="option2"
              >
                8AM-10AM <i className="bi bi-clock"></i>
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options"
                id="option3"
                autoComplete="off"
              />
              <label
                class="btn btn-outline-secondary select-time-font"
                for="option3"
              >
                10AM-12PM <i className="bi bi-clock"></i>
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options"
                id="option4"
                autoComplete="off"
              />
              <label
                class="btn btn-outline-secondary select-time-font"
                for="option4"
              >
                12PM-14PM <i className="bi bi-clock"></i>
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options"
                id="option5"
                autoComplete="off"
              />
              <label
                class="btn btn-outline-secondary select-time-font"
                for="option5"
              >
                14PM-16PM <i className="bi bi-clock"></i>
              </label>

              <input
                type="radio"
                class="btn-check"
                name="options"
                id="option6"
                autoComplete="off"
              />
              <label
                class="btn btn-outline-secondary select-time-font"
                for="option6"
              >
                16PM-18PM <i className="bi bi-clock"></i>
              </label>
            </div>

            <div className="findzone-proceed">
              <button
                id="findzone-proceed"
                onClick={() => {
                  toggleDateModal();
                  chanceOnData(
                    document.getElementById("findzone-date-input").value
                  );
                }}
              >
                {t("findzone_proceed")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Parking_Findzone;
