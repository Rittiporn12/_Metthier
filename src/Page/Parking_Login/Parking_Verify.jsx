import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import Modal from "react-bootstrap/Modal";

import LogoMain from "../../assets/IMG/Parking_Profile/metthier_logo.png";

import "./Parking_Verify.css";

function MyVerticallyCenteredModal(props) {
  let navigate = useNavigate();
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
          <i className="bi bi-person-circle modal-icon-car"></i>
        </div>

        <div className="modal-body-1">
          <span id="modal-body-main" style={{ fontSize: "30px" }}>
            {props.t("verify_modal_title")}
          </span>
          <span className="modal-body-description">
            {props.t("verify_modal_des")}
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
              navigate("/");
            }}
          >
            {props.t("done")}
          </button>
        </div>
      </div>
    </Modal>
  );
}

function Parking_Verify() {
  let navigate = useNavigate();

  const { t } = useTranslation();

  const [modalShow, setModalShow] = React.useState(false);

  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )} ${t("verify_min")}`;
  };

  return (
    <div className="parking-verify-container">
      <button className="parking-verify-chevron" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-verify-logo">
        <img src={LogoMain} alt="Logomain" />
      </div>

      <div className="parking-verify-background"></div>

      <div className="parking-verify-body">
        <div className="parking-verify-body-about">
          <div id="parking-verify-body-name">{t("verify")}</div>
          <div id="parking-verify-body-name">{t("verify_phone")}</div>
          <div id="parking-verify-body-description">{t("verifyDesc")}</div>
        </div>

        <div className="paring-verify-input-respon">
          <div className="parking-verify-input">
            <input
              type="tel"
              id="parking-verify-otp"
              maxlength="1"
              required
              pattern="[0-9]"
            />
            <input
              type="tel"
              id="parking-verify-otp"
              maxlength="1"
              required
              pattern="[0-9]"
            />
            <input
              type="tel"
              id="parking-verify-otp"
              maxlength="1"
              required
              pattern="[0-9]"
            />
            <input
              type="tel"
              id="parking-verify-otp"
              maxlength="1"
              required
              pattern="[0-9]"
            />
          </div>
        </div>

        <div className="parking-verify-resend">
          <span id="parking-verify-resend">
            <u>{t("resend")}</u>
          </span>
          <span id="parking-verify-time">{formatTime(timeLeft)}</span>
        </div>

        <div className="parking-signup-body-button">
          <button
            id="parking-signup-body-signin"
            onClick={() => {
              setModalShow(true);
            }}
          >
            {t("confirm")}
          </button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            t={t}
          />
        </div>
      </div>
    </div>
  );
}

export default Parking_Verify;
