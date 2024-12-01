import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import Modal from "react-bootstrap/Modal";

import "./Parking_Setting.css";

function MyVerticallyCenteredModal(props) {
  const { t } = useTranslation();
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
          <i className="bi bi-trash modal-icon-car"></i>
        </div>

        <div className="modal-body-1">
          <span id="modal-body-main" style={{ fontSize: "30px" }}>
            {props.t("deleteAccount")}
          </span>
          <span className="modal-body-description">
            {props.t("confirmationText")}
          </span>
        </div>
      </Modal.Body>

      <div className="modal-footer-main">
        <div className="modal-footer-about">
          <button id="modal-footer-cancel" onClick={props.onHide}>
          {t('deletecancel')}
          </button>
          <button
            style={{ backgroundColor: "#ff4c3c" }}
            id="modal-footer-ok"
            onClick={(event) => {
              event.stopPropagation();
              props.onHide();
              props.backToHome();
            }}
          >
            {t('deletesure')}
          </button>
        </div>
      </div>
    </Modal>
  );
}

function Parking_Setting({setToken}) {
  let navigate = useNavigate();
  const { t } = useTranslation();

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="parking-setting-container">
      <button className="parking-setting-chevron" onClick={() => navigate(-1)}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="parking-setting-title">
        <span className="parking-setting-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-setting-input">
        <i className="bi bi-search"></i>
        <input type="text" id="parking-setting-input" placeholder={t('search')} />
      </div>

      <div className="parking-setting-background"></div>

      <div className="parking-setting-body">
        <Link to="/language">
          <div className="parking-setting-body-about">
            <div id="parking-setting-about">
              <div className="parking-setting-left-section">
                <i className="bi bi-globe2 global-icon"></i>
                <span id="parking-setting-text">{t('changeLanguage')}</span>
              </div>
              <i className="bi bi-chevron-right chevron-icon-setting"></i>
            </div>
          </div>
        </Link>

        <hr />

        <Link to="/account">
          <div className="parking-setting-body-about">
            <div id="parking-setting-about">
              <div className="parking-setting-left-section">
                <i className="bi bi-shield-lock global-icon"></i>
                <span id="parking-setting-text">{t('accountSecurity')}</span>
              </div>
              <i className="bi bi-chevron-right chevron-icon-setting"></i>
            </div>
          </div>
        </Link>

        <hr />

        <Link to="/notification">
          <div className="parking-setting-body-about">
            <div id="parking-setting-about">
              <div className="parking-setting-left-section">
                <i className="bi bi-bell global-icon"></i>
                <span id="parking-setting-text">{t('notification')}</span>
              </div>
              <i className="bi bi-chevron-right chevron-icon-setting"></i>
            </div>
          </div>
        </Link>

        <hr />

        <div className="parking-setting-body-about">
          <div id="parking-setting-about">
            <div className="parking-setting-left-section">
              <i className="bi bi-credit-card global-icon"></i>
              <span id="parking-setting-text">{t('paymentSetting')}</span>
            </div>
            <i className="bi bi-chevron-right chevron-icon-setting"></i>
          </div>
        </div>

        <hr />

        <Link to="/information">
          <div className="parking-setting-body-about">
            <div id="parking-setting-about">
              <div className="parking-setting-left-section">
                <i className="bi bi-info-circle global-icon"></i>
                <span id="parking-setting-text">{t('information')}</span>
              </div>
              <i className="bi bi-chevron-right chevron-icon-setting"></i>
            </div>
          </div>
        </Link>

        <hr />

        <div className="parking-setting-button">
          <button
            id="parking-setting-button"
            onClick={() => {
              setModalShow(true);
            }}
          >
            <span>
              <i className="bi bi-trash3 trash-icon-setting-button"></i>
              {t('deleteAccount')}
            </span>
            <i className="bi bi-chevron-right chevron-icon-setting-button"></i>
          </button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            t={t}
            backToHome={() => {navigate("/")
              setToken("")
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Parking_Setting;
