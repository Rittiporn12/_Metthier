import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Modal from "react-bootstrap/Modal";

import AppointmentData from "../../Data/AppointmentData";

import "./Parking_Appointment.css";

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
          <i className="bi bi-car-front modal-icon-car"></i>
        </div>

        <div className="modal-body-1">
          <span id="modal-body-main">Appointment</span>
          <span className="modal-body-description">
            Check your information below
          </span>

          <div className="modal-info-main">
            <div className="modal-info">
              <span id="modal-info-about">{props.name}</span>
              <span id="modal-info-about">{props.date}</span>
              <span id="modal-info-about">{props.time}</span>
              <span id="modal-info-about">{props.reason}</span>
            </div>
          </div>
        </div>
      </Modal.Body>

      <div className="modal-footer-main">
        <div className="modal-footer-about">
          <button id="modal-footer-cancel" onClick={props.onHide}>
            Cancel
          </button>
          <button
            id="modal-footer-ok"
            onClick={() => {
              props.onHide();
              props.addApp(
                props.name,
                props.date,
                props.time,
                props.phone,
                props.car,
                props.reason
              );
              props.backToHome();
            }}
          >
            OK
          </button>
        </div>
      </div>
    </Modal>
  );
}

function Parking_Appointment() {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const maxLength = 100;

  const [modalShow, setModalShow] = React.useState(false);

  const [appData, setAppData] = useState(AppointmentData);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("appointmentData");
    if (savedData) {
      setAppData(JSON.parse(savedData));
    } else {
      setAppData(AppointmentData);
    }
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  let navigate = useNavigate();

  const addAppointment = (name, date, time, phone, car, reason) => {
    const newAppointment = {
      id:
        Number(
          appData.reduce((prev, appData) => {
            return prev < appData.id ? appData.id : prev;
          }, 0)
        ) + 1,
      name: name,
      date_and_time: date + " " + time,
      phone_number: phone,
      car_registration: car,
      reason: reason,
    };

    // Update state
    const updatedData = [...appData, newAppointment];
    setAppData(updatedData);
    // Save to local storage
    localStorage.setItem("appointmentData", JSON.stringify(updatedData));
    
  };

  return (
    <div className="parking-appointment-container">
      <div className="parking-appointment-title">
        <button
          className="parking-appointment-chevron"
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <span className="parking-appointment-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-appointment-body-behind"></div>

      <div className="parking-appointment-body">
        <div className="parking-appointment-main">
          <span id="parking-appointment-name">{t("appointment_make")}</span>
          <span id="parking-appointment-description">
          {t("appointment_make_below")}
          </span>
        </div>

        <div className="parking-appointment-main-input">
          <input
            type="text"
            id="Name-input"
            className="parking-appointment-input"
            required
          />
          <label
            htmlFor="parking-appointment-input"
            style={{ top: "0px", fontSize: "15px" }}
          >
            {t("appointment_make_first_name")}
          </label>
        </div>

        <div className="parking-appointment-main-input">
          <input
            type="date"
            id="Date-input"
            className="parking-appointment-input"
            required
          />
          <label
            htmlFor="parking-appointment-input"
            style={{ top: "0px", fontSize: "15px" }}
          >
            {t("appointment_make_date")}
          </label>
        </div>

        <div className="parking-appointment-main-input">
          <input
            type="time"
            id="Time-input"
            className="parking-appointment-input"
            required
          />
          <label
            htmlFor="parking-appointment-input"
            style={{ top: "0px", fontSize: "15px" }}
          >
            {t("appointment_make_time")}
          </label>
        </div>

        <div className="parking-appointment-main-input">
          <input
            type="text"
            id="Car-input"
            className="parking-appointment-input"
            required
          />
          <label
            htmlFor="parking-appointment-input"
            style={{ top: "0px", fontSize: "15px" }}
          >
            {t("appointment_make_registration")}
          </label>
        </div>

        <div className="parking-appointment-main-input">
          <input
            type="tel"
            id="Phone-input"
            className="parking-appointment-input "
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <label
            htmlFor="parking-appointment-input"
            style={{ top: "0px", fontSize: "15px" }}
          >
            {t("appointment_make_phone")}
          </label>
        </div>

        <div
          className="parking-appointment-main-input"
          style={{ position: "relative" }}
        >
          <textarea
            id="Reason-input"
            className="parking-appointment-input"
            required
            maxLength={maxLength}
            value={text}
            onChange={handleChange}
            style={{ resize: "none", height: "120px" }}
          />
          <label
            htmlFor="parking-appointment-input"
            style={{ top: "0px", fontSize: "15px" }}
          >
            {t("appointment_make_reason")}
          </label>
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              right: "70px",
              fontSize: "12px",
              color: "#888",
            }}
          >
            {text.length}/{maxLength}
          </div>
        </div>

        <div className="parking-appointment-confirm">
          <button
            id="parking-appointment-confirm"
            onClick={() => {
              setModalShow(true);
              setName(document.getElementById("Name-input").value);
              setDate(document.getElementById("Date-input").value);
              setTime(document.getElementById("Time-input").value);
              setCar(document.getElementById("Car-input").value);
              setPhone(document.getElementById("Phone-input").value);
              setReason(document.getElementById("Reason-input").value);
              console.log(date, time);
            }}
          >
            {t("appointment_make_confirm")}
          </button>
          <MyVerticallyCenteredModal
            show={modalShow}
            name={name}
            date={date}
            time={time}
            reason={reason}
            onHide={() => setModalShow(false)}
            addApp={() => addAppointment(name, date, time, phone, car, reason)}
            backToHome={() => navigate("/home")}
          />
        </div>
      </div>
    </div>
  );
}

export default Parking_Appointment;
