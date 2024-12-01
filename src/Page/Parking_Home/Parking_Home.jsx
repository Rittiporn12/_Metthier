import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import moment from "moment";

import AppointmentData from "../../Data/AppointmentData";

import "./Parking_Home.css";

function Parking_Home({ userData, setUserData }) {
  let navigate = useNavigate();
  const { t } = useTranslation();

  const [appData, setAppData] = useState(AppointmentData);

  

  useEffect(() => {
    // console.log(userData);
    console.log(appData);
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem("appointmentData");
    if (savedData) {
      setAppData(JSON.parse(savedData));
    }
    const savedUserData = localStorage.getItem("userData");
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  return (
    <div className="parking-home-container">
      <div className="parking-home-title">
        <i className="bi bi-person-circle parking-home-profile"></i>
        <span className="parking-home-name">
          {userData.firstname + " " + userData.lastname}
        </span>
        <span className="parking-home-status">{t("status")}: {userData.role}</span>
        <span className="parking-home-phone">
          {/* Phone: 081-234-5678 */}
          {t("phone")}: {userData.phone}
        </span>
      </div>

      <div className="parking-home-button">
        <button
          className="parking-home-find"
          onClick={() => navigate("/findzone")}
        >
          {t("findByAI")}
          <i className="bi bi-chevron-right"></i>
        </button>

        <button
          className="parking-home-car"
          onClick={() => navigate("/addcar")}
        >
          {t("addMyCar")}
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <div className="parking-home-about-main">
        {userData.role === "Member" && (
          <div
            className="parking-home-about"
            onClick={() => navigate("/appointment")}
          >
            <span className="parking-home-appointment-add-01">
              <i className="bi bi-calendar-plus-fill parking-home-appointment-calendar"></i>
              <span className="parking-home-appointment-text">
                {t("appointment")}
                <span className="parking-home-appointment-add-02">
                  {t("makeAppointment")}
                </span>
              </span>
            </span>
            <i className="bi bi-plus-lg parking-home-appointment-plus"></i>
          </div>
        )}

        {appData.map((data) => {
            let date = moment(data.date_and_time);
          return (
            <div
              className="parking-home-about-date"
              onClick={() => navigate("/appointmentnotify", { state: { appointment: data } })}
              key={data.id}
            >
              <span className="parking-home-appointment-add-01-date">
                <i className="bi bi-car-front parking-home-appointment-car-date"></i>
                <span className="parking-home-appointment-text-date">
                  <span className="parking-home-bell">
                    {t("appointment")}&nbsp;
                    <i className="bi bi-bell parking-home-bell-icon"></i>
                  </span>
                  <span className="parking-home-appointment-add-02-date">
                    <i className="bi bi-calendar parking-home-appointment-calendar-icon"></i>
                    &nbsp;{date.format("dddd, DD MMMM YYYY")}
                  </span>
                </span>
              </span>
              <i className="bi bi-chevron-right parking-home-appointment-chevron-date"></i>
            </div>
          );
        })}

        {/* <div className="parking-home-about-date">
                    <span className="parking-home-appointment-add-01-date">
                    <i className="bi bi-car-front parking-home-appointment-car-date"></i>
                        <span className="parking-home-appointment-text-date">
                            <span className="parking-home-bell">
                                Appointment&nbsp;<i className="bi bi-bell parking-home-bell-icon"></i>
                            </span>
                                <span className="parking-home-appointment-add-02-date">
                                <i className="bi bi-calendar parking-home-appointment-calendar-icon"></i>
                                &nbsp;Tuesday, 5 November 2024
                            </span>
                        </span>
                    </span>
                    <i className="bi bi-chevron-right parking-home-appointment-chevron-date"></i>
                </div>

                <div className="parking-home-about-date">
                    <span className="parking-home-appointment-add-01-date">
                    <i className="bi bi-car-front parking-home-appointment-car-date"></i>
                        <span className="parking-home-appointment-text-date">
                            <span className="parking-home-bell">
                                Appointment&nbsp;<i className="bi bi-bell parking-home-bell-icon"></i>
                            </span>
                                <span className="parking-home-appointment-add-02-date">
                                <i className="bi bi-calendar parking-home-appointment-calendar-icon"></i>
                                &nbsp;Friday, 8 November 2024
                            </span>
                        </span>
                    </span>
                    <i className="bi bi-chevron-right parking-home-appointment-chevron-date"></i>
                </div>

                <div className="parking-home-about-date">
                    <span className="parking-home-appointment-add-01-date">
                    <i className="bi bi-car-front parking-home-appointment-car-date"></i>
                        <span className="parking-home-appointment-text-date">
                            <span className="parking-home-bell">
                                Appointment&nbsp;<i className="bi bi-bell parking-home-bell-icon"></i>
                            </span>
                                <span className="parking-home-appointment-add-02-date">
                                <i className="bi bi-calendar parking-home-appointment-calendar-icon"></i>
                                &nbsp;Saturday, 9 November 2024
                            </span>
                        </span>
                    </span>
                    <i className="bi bi-chevron-right parking-home-appointment-chevron-date"></i>
                </div>

                <div className="parking-home-about-date">
                    <span className="parking-home-appointment-add-01-date">
                    <i className="bi bi-car-front parking-home-appointment-car-date"></i>
                        <span className="parking-home-appointment-text-date">
                            <span className="parking-home-bell">
                                Appointment&nbsp;<i className="bi bi-bell parking-home-bell-icon"></i>
                            </span>
                                <span className="parking-home-appointment-add-02-date">
                                <i className="bi bi-calendar parking-home-appointment-calendar-icon"></i>
                                &nbsp;Sunday, 10 November 2024
                            </span>
                        </span>
                    </span>
                    <i className="bi bi-chevron-right parking-home-appointment-chevron-date"></i>
                </div> */}
      </div>
    </div>
  );
}

export default Parking_Home;
