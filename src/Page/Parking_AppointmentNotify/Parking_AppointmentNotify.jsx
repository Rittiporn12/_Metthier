import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";

// import AppointmentData from "../../Data/AppointmentData";

import "./Parking_AppointmentNotify.css";
import moment from "moment";

function Parking_AppointmentNotify() {
  const { t } = useTranslation();

  const location = useLocation();
  const { appointment } = location.state || {}; // Get the data from state

  let date = moment(appointment.date_and_time);

  let navigate = useNavigate();

  // const [appData, setAppData] = useState(AppointmentData);

  // let date = moment(appData.date_and_time);

  useEffect(() => {
    console.log(appointment);
  }, []);

  return (
    <div className="parking-notify-container">
      <div className="parking-notify-title">
        <button
          className="parking-notify-chevron"
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <span className="parking-notify-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-appointment-body-behind"></div>

      <div className="parking-appointment-body">
        <div className="parking-appointment-main">
          <span id="parking-appointment-name">{t("appointment_make")}</span>
          <span id="parking-appointment-description">
          {t("appointment_make_check")}
          </span>
        </div>

        <div className="parking-notify-main-input">
          <div id="parking-notify-input"/>
            <span id="parking-notify-name">{appointment.name}</span>
            <label htmlFor="parking-notify-input" style={{ top: "0px", fontSize: "15px" }}>
            {t("appointment_make_first_name")}
          </label>
        </div>

        <div className="parking-notify-main-input">
          <div id="parking-notify-input"/>
            <span id="parking-notify-name">{date.format("ddd, DD MMM YYYY")}</span>
            <label htmlFor="parking-notify-input" style={{ top: "0px", fontSize: "15px" }}>
            {t("appointment_make_date")}
          </label>
        </div>

        <div className="parking-notify-main-input">
          <div id="parking-notify-input"/>
            <span id="parking-notify-name">{date.format("hh:mm A")}</span>
            <label htmlFor="parking-notify-input" style={{ top: "0px", fontSize: "15px" }}>
            {t("appointment_make_time")}
          </label>
        </div>

        <div className="parking-notify-main-input">
          <div id="parking-notify-input"/>
            <span id="parking-notify-name">{appointment.car_registration}</span>
            <label htmlFor="parking-notify-input" style={{ top: "0px", fontSize: "15px" }}>
            {t("appointment_make_registration")}
          </label>
        </div>

        <div className="parking-notify-main-input">
          <div id="parking-notify-input"/>
            <span id="parking-notify-name">{appointment.phone_number}</span>
            <label htmlFor="parking-notify-input" style={{ top: "0px", fontSize: "15px" }}>
            {t("appointment_make_phone")}
          </label>
        </div>

        <div className="parking-notify-main-input">
          <div id="parking-notify-input" style={{ height: "100px" }}/>
            <span id="parking-notify-name" style={{ marginTop: "-5.2rem" }}>{appointment.reason}</span>
            <label htmlFor="parking-notify-input" style={{ top: "0px", fontSize: "15px" }}>
            {t("appointment_make_reason")}
          </label>
        </div>

      </div>

    </div>
  );
}

export default Parking_AppointmentNotify;
