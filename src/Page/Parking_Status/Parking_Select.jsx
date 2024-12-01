import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Parking_Select.css";

import statusData from "../../Data/statusData";
import carData from "../../Data/carData";

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
          <i className="bi bi-car-front modal-icon-car"></i>
        </div>

        <div className="modal-body-1">
          <span id="modal-body-main">My QR code</span>
          <span className="modal-body-description">
            You're select <u>ABC-123</u>
          </span>

          <div className="modal-select-info-main">
            <div className="modal-select-info">
              <QRCodeSVG bgColor="transparent" size={200} />
            </div>
          </div>
        </div>
      </Modal.Body>

      <div className="modal-footer-main">
        <div className="modal-footer-about">
          <button
            id="modal-footer-ok"
            onClick={(event) => {
              event.stopPropagation();
              props.onHide();
            }}
          >
            Done
          </button>
        </div>
      </div>
    </Modal>
  );
}

function Parking_Select() {
  let navigate = useNavigate();

  const { t } = useTranslation();

  const [modalShow, setModalShow] = React.useState(false);

  const [status, setStatus] = React.useState(statusData);
  const [cars, setCars] = React.useState(carData);


  return (
    <div className="parking-select-container">
      <div className="parking-select-title">
        <span className="parking-select-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-select-body">
        <div className="parking-select-body-title">
          <span id="parking-select-body-name">{t('selectCar')}</span>
          <span id="parking-select-body-description">
            {t('selectCarDescription')}
          </span>
        </div>


        {/* ------------------- */}
        <div className="parking-select-allcar">

          {status.map((item) => {

            let carStatus = cars.find((car) => {
              return car.car_registration === item.car;
            });

            return (
              <div
              className="parking-select-mycar"
              onClick={() => navigate("/status", { state:{ mainStatus: item , carStatus: carStatus } })}
              key={item.id}
            >
              <button
                className="parking-select-qrcode"
                onClick={(event) => {
                  event.stopPropagation();
                  setModalShow(true);
                }}
              >
                <i className="bi bi-qr-code-scan"></i>
              </button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <div className="parking-select-chevron">
                <i className="bi bi-chevron-right"></i>
              </div>
              <div className="parking-select-car">
                <i className="bi bi-car-front"></i>
              </div>
              <div className="parking-select-info">
                <span id="parking-select-registration">{item.car}</span> <br />
                <span id="parking-select-status">{carStatus.isMember ? "Member" : "Visitor"}</span>
              </div>
            </div>
            )
          }

          )
          }
          
        </div>
              {/* --------------------- */}
      </div>
    </div>
  );
}

export default Parking_Select;
