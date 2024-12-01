import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import moment from "moment";

import "./Parking_Checkhistory.css";

function Parking_Checkhistory() {
  const { t } = useTranslation();

  const location = useLocation();
  let navigate = useNavigate();

  const { historyInfo } = location.state;
  
  return (
    <div className="parking-checkhistory-container">
      <button
        className="parking-checkhistory-chevron"
        onClick={() => navigate(-1)}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-checkhistory-title">
        <span className="parking-checkhistory-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-checkhistory-body">
        <div id="parking-checkhistory-icon">
          <i className="bi bi-car-front"></i>
        </div>

        <div className="parking-checkhistory-about">
          <span id="parking-checkhistory-main">{moment(historyInfo.date).format("DD-MM-YYYY")}</span>
          <span id="parking-checkhistory-main">{historyInfo.car}</span>
        </div>

        <div className="parking-checkhistory-background-main">
          <div className="parking-checkhistory-background">
            <span id="parking-checkhistory-name-bg">{t('checkHistory')}</span>
            <span id="parking-checkhistory-description-bg">
              {t('checkHistoryDescription')}
            </span>
          </div>

          <div className="parking-checkhistory-box-main">
            <div className="parking-checkhistory-box">
                <div id="parking-checkhistory-box">
                    <span id="parking-checkhistory-box-name">{t('parkingZone')}</span> <br />
                    <span id="parking-checkhistory-box-des">{t('zone')} {historyInfo.zone}</span>
                </div>
            </div>
            <div className="parking-checkhistory-box">
                <div id="parking-checkhistory-box">
                    <span id="parking-checkhistory-box-name">{t('enterTime')}</span> <br />
                    <span id="parking-checkhistory-box-des">{moment(historyInfo.date).format("HH:mm:ss")}</span>
                </div>
            </div>
            <div className="parking-checkhistory-box">
                <div id="parking-checkhistory-box">
                    <span id="parking-checkhistory-box-name">{t('leavingTime')}</span> <br />
                    <span id="parking-checkhistory-box-des">{moment(historyInfo.leaveTime).format("HH:mm:ss")}</span>
                </div>
            </div>
            <div className="parking-checkhistory-box">
                <div id="parking-checkhistory-box">
                    <span id="parking-checkhistory-box-name">{t('cardNumber')}</span> <br />
                    <span id="parking-checkhistory-box-des">{historyInfo.cardID}</span>
                </div>
            </div>
            <div className="parking-checkhistory-box">
                <div id="parking-checkhistory-box">
                    <span id="parking-checkhistory-box-name">{t('discount')}</span> <br />
                    <span id="parking-checkhistory-box-des">{historyInfo.discount < 0 ? t('allTime') : historyInfo.discount + " Hours"}</span>
                </div>
            </div>
            <div className="parking-checkhistory-box">
                <div id="parking-checkhistory-box">
                    <span id="parking-checkhistory-box-name">{t('totalAmount')}</span> <br />
                    <span id="parking-checkhistory-box-des">{historyInfo.total === 0 ? t('free') : "฿" + historyInfo.total}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parking_Checkhistory;
