import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate , useLocation} from "react-router-dom";
import { useTranslation } from "react-i18next";

import moment from "moment";

import ThaiQR from '../../assets/IMG/Parking_Status/ThaiQR.jpg';
import "./Parking_Payment.css";

import historyData from "../../Data/historyData";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ backgroundColor: "rgba(242, 242, 230, 0.8)" }}
    >
      <Modal.Body>
        <div className="modal-icon">
          <i className="bi bi-check2 modal-icon-car"></i>
        </div>

        <div className="modal-body-1">
          <span id="modal-body-main">{props.t("thankYou")}</span>
          <span className="modal-body-description">
            {props.t("thankYouDesc")}
          </span>
        </div>
      </Modal.Body>

      <div className="modal-footer-main">
        <div className="modal-footer-about">
          <button
            id="modal-footer-ok"
            onClick={(event) => {
              event.stopPropagation();
              props.onHide();
              props.backToHome();
            }}
          >
            {props.t("done")}
          </button>
        </div>
      </div>
    </Modal>
  );
}

function Parking_Payment() {

  let location = useLocation();
  let navigate = useNavigate();

  const { t } = useTranslation();

  const { parkingFee, time, mainStatus, discount} = location.state;

  const [modalShow, setModalShow] = React.useState(false);

  const [timeLeft, setTimeLeft] = useState(3 * 60)

  const [hisData, setHisData] = useState(historyData);


  useEffect(() => {
    console.log(mainStatus.enterTime);
  }, []);

  useEffect(() => {
    const savedHistoryData = localStorage.getItem("hisData");
    if (savedHistoryData) {
      setHisData(JSON.parse(savedHistoryData));
    } else {
      setHisData(historyData);
    }
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  function saveToHistory() {
    const newHistory = {
      id: Number(hisData.reduce((prev, hisData) => {
        return prev < hisData.id ? hisData.id : prev;
      }, 0)) + 1,
      date: moment(mainStatus.enterTime, 'HH:mm').format('YYYY-MM-DD HH:mm:ss'),
      leaveTime: moment().add(timeLeft, 'seconds').format('YYYY-MM-DD HH:mm:ss'),
      total: parkingFee,
      discount: discount,
      car: mainStatus.car,
      cardID: mainStatus.cardID,
      zone: mainStatus.zone,
    };

    const updatedHistory = [...hisData, newHistory];
    localStorage.setItem("hisData", JSON.stringify(updatedHistory));
    setHisData(updatedHistory);
    console.log(updatedHistory);
  }


  return (
    <div className="parking-payment-container">
      <button className="parking-payment-chevron" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-payment-title">
        <span className="parking-payment-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-payment-body">

        <div className="parking-payment-thaiqr"></div>
        <div className="parking-payment-qrcode">
          <div id="parking-payment-qrcode">
            <QRCodeSVG bgColor="transparent" size={200} />
          </div>
        </div>
        <div className="parking-payment-qrcode-thai">
            <div id="parking-payment-qrcode-thai">
              <img src={ThaiQR} alt="" />
            </div>
        </div>
        <div className="parking-payment-qrcode-bg">
          <div id="parking-payment-qrcode-bg">
            <span id="parking-payment-qrcode-bg-name">
              Metthier Company <span>{formatTime(timeLeft)}</span>
            </span>
          </div>
        </div>

        <div className="parking-payment-qrcode-about">

          <div id="parking-payment-qrcode-about">
            <span id="parking-payment-qrcode-total">
              {t('totalAmount')}
            </span>
            <span id="parking-payment-qrcode-amount">
              {parkingFee > 0 ? "฿" + parkingFee : t("free")}
            </span>
          </div>

          <div id="parking-payment-qrcode-about-1">
            <span id="parking-payment-qrcode-timeleftall">
              {t('exitTime')}
            </span>
            <span id="parking-payment-qrcode-timeleft">
              {moment().add(timeLeft, 'seconds').format('DD MMM YYYY HH:mm:ss')}
              {/* 10 Otc 2024, 14:00 */}
            </span>
          </div>

          <div id="parking-payment-qrcode-about-2">
            <span id="parking-payment-qrcode-timeleftall-2">
              {t('parkingTime')}
            </span>
            <span id="parking-payment-qrcode-timeleft-2">
              {time}
            </span>
          </div>

          <div className="parking-payment-qrcode-saveqr">
            <button id="parking-payment-qrcode-saveqr">
              {t('saveQRCode')}
            </button>
          </div>

          <div className="parking-payment-qrcode-confirm">
            <button id="parking-payment-qrcode-confirm"
              onClick={() => {setModalShow(true)
                saveToHistory()
              }}>{t('confirm')}
            </button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                backToHome={() => navigate("/home")}
                t={t}
            />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Parking_Payment;
