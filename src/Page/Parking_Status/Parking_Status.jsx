import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Traffic from "../../assets/IMG/Parking_Status/Traffic.png";

import moment from "moment";
import "./Parking_Status.css";

function Parking_Status() {
  const location = useLocation();

  const { t } = useTranslation();

  const { mainStatus, carStatus } = location.state;

  let navigate = useNavigate();
  const discount = carStatus.isMember ? -1 : 2;
  const fee = 50;

  useEffect(() => {
    console.log(carStatus);
  }, []);

  // parking time

  // when enter

  const parkingTimeStart = moment(mainStatus.enterTime, "HH:mm");

  // current time
  const [seconds, setSeconds] = useState(() => {
    const parkingTimeNow = moment();
    return Math.floor(parkingTimeNow.diff(parkingTimeStart) / 1000); // difference in seconds
  });

  // update timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      const parkingTimeNow = moment();
      const parkingTimeDiff = Math.floor(
        parkingTimeNow.diff(parkingTimeStart) / 1000
      );
      setSeconds(parkingTimeDiff); // Update the difference in seconds
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [parkingTimeStart]);

  // convert seconds to string

  function secondsToString(seconds) {
    const minutes_seconds = 60;
    const hour_seconds = minutes_seconds * 60;

    if (seconds < 0) {
      return "00:00:00";
    } else {
      const hours = Math.floor(seconds / hour_seconds)
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((seconds % hour_seconds) / minutes_seconds)
        .toString()
        .padStart(2, "0");
      const seconds_ = Math.floor(seconds % minutes_seconds)
        .toString()
        .padStart(2, "0");

      return `${hours}:${minutes}:${seconds_}`;
    }
  }

  let time = secondsToString(seconds);

  // parking Fee calculate

  function parkingFeeCalculation() {
    const hours = Math.floor(seconds / 3600);
    if (discount >= 0) {
      return (hours - discount) * fee;
    } else {
      return 0;
    }
  }

  return (
    <div className="parking-status-container">
      <button className="parking-status-chevron" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-status-title">
        <span className="parking-status-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-status-body">
        {["top"].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Traffic Info (Coming Soon...)
              </Tooltip>
            }
          >
            <button className="parking-status-traffic">
              <img src={Traffic} alt="Traffic" />
            </button>
          </OverlayTrigger>
        ))}
        <div className="parking-status-img">
          <i className="bi bi-car-front"></i>
        </div>
        {/* time */}
        <div className="parking-status-regis">
          <span className="parking-status-registration">
            <span id="parking-status-registration">{mainStatus.car}</span>
          </span>
        </div>{" "}
        <br />
        <div className="parking-status-time">{secondsToString(seconds)}</div>
        <div className="parking-status-zone">
          <span id="parking-status-zone-name">
            {t('parking')} <br />
            <span id="parking-status-zone-name-under">
              {t('zone')} {mainStatus.zone}
            </span>
          </span>
          <span id="parking-status-zone-name">
            {t('cardID')} <br />
            <span id="parking-status-zone-name-under">{mainStatus.cardID}</span>
          </span>
        </div>
      </div>

      <div className="parking-status-footer">
        <div className="parking-status-footer-display">
          <span id="parking-status-footer-front">
            {t('enterDate')} <br />
            <span id="parking-status-footer-under">
              {parkingTimeStart.format("DD/MM/YYYY")}
            </span>
          </span>
          <span id="parking-status-footer-front">
            {t('enterTime')} <br />
            <span id="parking-status-footer-under">
              {parkingTimeStart.format("HH:mm:ss")}
            </span>
          </span>
          <span id="parking-status-footer-front">
            {t('parkingFee')} <br />
            <span id="parking-status-footer-under">{fee + "฿ / H"}</span>
          </span>
        </div>
        <div className="parking-status-footer-price">
          <span id="parking-status-footer-price">
            {t('discount')} <br /> <br />
            <span id="parking-status-footer-discount">
              {discount >= 0 ? discount + " " + t('hour') : t('allTime')}
            </span>
          </span>
          <span id="parking-status-footer-price">
            {t('payment')} <br /> <br />
            <span id="parking-status-footer-amount">
              &nbsp;&nbsp;&nbsp;&nbsp;
              {parkingFeeCalculation() > 0
                ? parkingFeeCalculation() + "฿"
                : t('free')}
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </span>
        </div>
        <div
          className="parking-status-payment"
          onClick={() =>
            navigate("/payment", {
              state: {
                parkingFee: parkingFeeCalculation(),
                time: secondsToString(seconds),
                mainStatus: mainStatus,
                discount: discount,
                // parkingTimeStart: parkingTimeStart,
              },
            })
          }
        >
          <span id="parking-status-payment">
            <i id="car-payment" className="bi bi-car-front"></i>&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('continueToPayment')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Parking_Status;
