import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import Modal from "react-bootstrap/Modal";

import "./Parking_Resetpasswordinput.css";

import LogoMain from "../../../assets/IMG/Parking_Profile/metthier_logo.png";

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
          <i className="bi bi-shield-lock modal-icon-car"></i>
        </div>

        <div className="modal-body-1">
          <span id="modal-body-main" style={{ fontSize: "25px" }}>
            {props.t("resetPassword")}
          </span>
          <span className="modal-body-description">
          {props.t("resetSuccess")}

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

function Parking_Resetpasswordinput() {
  let navigate = useNavigate();

  const { t } = useTranslation();

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="parking-resetpasswordinput-container">
      <button className="parking-account-chevron" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-resetpasswordinput-logo">
        <img src={LogoMain} alt="Logomain" />
      </div>

      <div className="parking-resetpasswordinput-background"></div>

      <div className="parking-resetpasswordinput-body">
        <div className="parking-resetpasswordinput-body-about">
          <div id="parking-resetpasswordinput-body-name">{t("resetPassword")}</div>
          <div id="parking-resetpasswordinput-body-description">
            {t("enterDetails")}
          </div>
        </div>

        <div className="parking-resetpassword-body-input">
          <input type="password" id="parking-resetpassword-body-user" />
          <span id="parking-resetpassword-body-username">{t("newPassword")}</span>
        </div>

        <div className="parking-resetpassword-body-input">
          <input type="password" id="parking-resetpassword-body-user" />
          <span id="parking-resetpassword-body-username">{t("confirmPassword")}</span>
        </div>

        <div className="parking-resetpasswordinput-body-button">
          <button
            id="parking-resetpasswordinput-body-signin"
            onClick={() => {
              setModalShow(true);
            }}
          >
            {t("next")}
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

export default Parking_Resetpasswordinput;
