import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Parking_Notification.css";
function Parking_Notification() {
  let navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="parking-notification-container">
      <button
        className="parking-notification-chevron"
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-notification-title">
        <span className="parking-notification-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-notification-background"></div>

      <div className="parking-notification-body">
        <div className="parking-notification-body-about">
          <div id="parking-notification-about">
            <span id="parking-notification-text">{t('notification')}</span>
            <div className="parking-notification-left-section">
              <span id="parking-notification-text-01">{t('open')}</span>
              <i className="bi bi-chevron-right chevron-icon-notification"></i>
            </div>
          </div>
        </div>

        <hr />

        <div className="parking-notification-body-about">
          <div id="parking-notification-about">
            <span id="parking-notification-text">{t('notificationInSMS')}</span>
            <div className="parking-notification-left-section">
              <span id="parking-notification-text-01">{t('open')}</span>
              <i className="bi bi-chevron-right chevron-icon-notification"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parking_Notification;
