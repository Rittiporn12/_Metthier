import React, { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { checkUsername } from "../../Data/LoginData";

import { useTranslation } from "react-i18next";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "./Parking_Login.css";

import Linelogo from "../../assets/IMG/Parking_Profile/line_logo_1.png";
import LogoMain from "../../assets/IMG/Parking_Profile/metthier_logo.png";

function Parking_Login({ setToken, token }) {
  let navigate = useNavigate();

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);

  useEffect(() => {
    setShowAlertModal(true);
  }, []);

  const { t } = useTranslation();

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  return (
    <div className="parking-login-container">
      {/* Team Name */}
      <Modal
        show={showTeamModal}
        onHide={() => setShowTeamModal(false)}
        centered
      >
        <Modal.Body>
          <div className="modal-icon">
            <i className="bi bi-people-fill modal-icon-car"></i>
          </div>

          <div className="modal-body-1">
            <span id="modal-body-main">รายชื่อสมาชิกในกลุ่ม</span>
            <span
              className="modal-body-description"
              style={{ fontWeight: "normal" }}
            >
              <p style={{ fontWeight: "normal", fontSize: "16px" }}>
                <br />
                66087810 นายมุสตอฟา คามาล <br />
                66088346 นายฤทธิพร ผึ่งผาย <br />
                66085327 นายณเมธ วงค์มงคล <br />
                66099903 นายธีรภัทร์ สายอุบล <br />
                66088226 นายกันณพิช เบ้าศรี <br />
              </p>
            </span>
          </div>
        </Modal.Body>
        <div className="modal-footer-main">
          <div className="modal-footer-about">
          <button
              id="modal-footer-cancel"
              onClick={() => {
                setShowAlertModal(true);
                setShowTeamModal(false);

              }}
            >
              คู่มือ
            </button>
            <button
              id="modal-footer-ok"
              onClick={() => setShowTeamModal(false)}
            >
              {t("login_done")}
            </button>
          </div>
        </div>
      </Modal>
      {/* Alert Setting */}
      <Modal
        show={showAlertModal}
        onHide={() => setShowAlertModal(false)}
        centered
      >
        <Modal.Body>
          <div className="modal-icon">
            <i className="bi bi-exclamation-triangle-fill modal-icon-car"></i>
          </div>

          <div className="modal-body-1">
            <span id="modal-body-main">คำอธิบายการใช้งาน</span>
            <span
              className="modal-body-description"
              style={{ fontWeight: "normal" }}
            >
              <p style={{ fontWeight: "bold", fontSize: "16px" }}>
                ชื่อผู้ใช้และรหัสผ่านการเข้าใช้งาน
              </p>
              <b>User:</b> Member, Visitor <br/ >
              <b>Password:</b> 1234 <br />
              <hr />
              <p style={{ fontWeight: "bold", fontSize: "15px" }}>
                กรุณาตั้งค่าหน้าจอตามตัวอย่างด้านล่าง <br />
                เนื่องจากแอพลิเคชันเรารองรับเฉพาะ <br />
                บนมือถือและแท็บเล็ต
              </p>
              - iPhone 12 Pro <b>(390x844)</b> <br />- iPhone 14 Pro{" "}
              <b>(393x852)</b> <br />- iPhone 13 Promax <b>(428x926)</b> <br />-
              iPad <b>(768x1024)</b> <br />
            </span>
          </div>
        </Modal.Body>
        <div className="modal-footer-main">
          <div className="modal-footer-about">
            <button
              id="modal-footer-ok"
              onClick={() => setShowAlertModal(false)}
            >
              {t("login_done")}
            </button>
          </div>
        </div>
      </Modal>
      {/* wrong username or password */}
      <Modal
        show={showPasswordModal}
        onHide={() => setShowPasswordModal(false)}
        centered
      >
        <Modal.Body>
          <div className="modal-icon">
            <i className="bi bi-x-circle modal-icon-car"></i>
          </div>

          <div className="modal-body-1">
            <span id="modal-body-main">{t("login_title")}</span>
            <span
              className="modal-body-description"
              style={{ fontWeight: "normal" }}
            >
              {t("login_des")}
            </span>
          </div>
        </Modal.Body>
        <div className="modal-footer-main">
          <div className="modal-footer-about">
            <button
              id="modal-footer-ok"
              onClick={() => setShowPasswordModal(false)}
            >
              {t("login_done")}
            </button>
          </div>
        </div>
      </Modal>

      <div className="parking-login-header">
        <div id="parking-login-header">{t("dontHaveAccount")}</div>
        <button id="parking-login-signup" onClick={() => navigate("/signup")}>
          {t("signUp")}
        </button>
      </div>

      <div className="parking-login-logo">
        <img src={LogoMain} alt="Logomain" />
      </div>

      <div className="parking-login-background"></div>

      <div className="parking-login-body">
        <div className="parking-login-body-about">
          <div id="parking-login-body-name">{t("welcomeBack")}</div>
          <div id="parking-login-body-description">{t("enterDetails")}</div>
        </div>

        <div className="parking-login-body-input">
          <input
            type="text"
            className="parking-login-body-user"
            id="username-input"
            ref={usernameInput}
            placeholder="Member, Visitor"
          />
          <span id="parking-login-body-username">{t("username")}</span>
        </div>

        <div className="parking-login-body-input">
          <input
            type="password"
            className="parking-login-body-user"
            id="password-input"
            ref={passwordInput}
            placeholder="1234"
          />
          <span id="parking-login-body-username">{t("password")}</span>
        </div>

        <div className="parking-login-body-forgot">
          <button
            id="parking-login-body-forgot"
            onClick={() => navigate("/resetpassword")}
          >
            {t("forgetPassword")}
          </button>
        </div>

        <div className="parking-login-body-button">
          <button
            id="parking-login-body-signin"
            onClick={() => {
              const username = usernameInput.current.value.trim();
              const password = passwordInput.current.value.trim();
              const userInfo = checkUsername(username, password);

              console.log(userInfo);

              if (userInfo) {
                setToken(userInfo.token);
                console.log(token);
                navigate("/home");
              } else {
                setShowPasswordModal(true);
              }
            }}
          >
            <i className="bi bi-person-circle"></i>
            {t("signIn")}
          </button>

          <button id="parking-login-body-signin-line">
            <img src={Linelogo} alt="LineLogo" />
            {t("signIn")}
          </button>
        </div>

        <div className="parking-login-footer-team">
          {["right"].map((placement) => (
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>
                  รายชื่อสมาชิกในกลุ่ม
                </Tooltip>
              }
            >
              <button
                className="bi bi-people-fill"
                id="parking-login-team"
                onClick={() => setShowTeamModal(true)}
              ></button>
            </OverlayTrigger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Parking_Login;
