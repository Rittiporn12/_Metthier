import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import carsData from "../../Data/carData";
import { useTranslation } from "react-i18next";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import "./Parking_Addcar.css";

function Parking_Addcar({ role }) {
  
  const { t } = useTranslation();
  const [cars, setCars] = useState(carsData);
  const [deletedCars, setDeletedCars] = useState([]); // Track deleted cars
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false); // State for Add Car Modal
  const [showLimitModal, setShowLimitModal] = useState(false);

  let navigate = useNavigate();

  // Load cars from localStorage on component mount
  useEffect(() => {
    const savedCars = localStorage.getItem("cars");
    if (savedCars) {
      setCars(JSON.parse(savedCars));
    } else {
      setCars(carsData); // Load default cars if no saved data exists
    }
  }, []);

  // Save cars to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  const toggleMembership = (id) => {
    setCars((prevCars) => {
      const memberCount = prevCars.filter((car) => car.isMember).length;

      return prevCars.map((car) => {
        if (car.id === id) {
          // If the car is already a member, allow toggling off
          if (car.isMember) {
            return { ...car, isMember: false };
          }

          // check if there are already 2 members
          if (memberCount < 2) {
            return { ...car, isMember: true };
          } else {
            setShowLimitModal(true);
          }
        }
        return car;
      });
    });
  };

  const handleDeleteClick = (id) => {
    const selectedCar = cars.find((car) => car.id === id);
    setCarToDelete(selectedCar); // Set the car to delete
    setShowDeleteModal(true); // Show confirmation modal
  };

  const confirmDeleteCar = () => {
    if (carToDelete) {
      setCars((prevCars) => {
        setDeletedCars((prevDeleted) => [...prevDeleted, carToDelete]); // Track deleted car
        return prevCars.filter((car) => car.id !== carToDelete.id);
      });
      setCarToDelete(null); // Clear selected car
    }
    setShowDeleteModal(false); // Hide modal
  };

  const restoreCar = () => {
    if (deletedCars.length > 0) {
      const lastDeletedCar = deletedCars[deletedCars.length - 1];
      setDeletedCars((prevDeleted) => prevDeleted.slice(0, -1));
      setCars((prevCars) => [...prevCars, lastDeletedCar]);
    }
  };

  const resetLocalStorage = () => {
    localStorage.removeItem("cars"); // Remove data from localStorage
    setCars(carsData); // Reset state to the default cars
    setDeletedCars([]); // Clear deleted cars state
  };

  // Modal

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addCarRegistration = (carReg) => {
    const newCar = {
      id:
        Number(
          cars.reduce((prev, cars) => {
            return prev < cars.id ? cars.id : prev;
          }, 0)
        ) + 1,
      car_registration: carReg,
      isMember: false,
    };
    setCars([...cars, newCar]);
  };

  return (
    <div className="parking-addcar-container">
      {/* -------------------------------------------------------- */}

      {/* Delete Confirmation Modal */}
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
      >
        <Modal.Body>
          <div className="modal-icon">
            <i className="bi bi-car-front modal-icon-car"></i>
          </div>
          <div className="modal-body-1">
            <span id="modal-body-main">{t("addmycar_modalde_title")}</span>
            <span className="modal-body-description">
            {t("addmycar_modalde_des1")}{" "}
              <span style={{ fontWeight: "normal" }}>{t("addmycar_modalde_des2")}</span>{" "}
              <p style={{ fontWeight: "normal" }}>
              {t("addmycar_modalde_des3")}{" "}
                <u style={{ fontWeight: "bold" }}>
                  {carToDelete?.car_registration}?
                </u>
              </p>
            </span>
          </div>
        </Modal.Body>
        <div className="modal-footer-main">
          <div className="modal-footer-about">
            <button
              id="modal-footer-cancel"
              onClick={() => setShowDeleteModal(false)}
            >
              {t("addmycar_modal_cancel")}
            </button>
            <button id="modal-footer-ok" onClick={confirmDeleteCar} style={{ backgroundColor: "#FF3220" }}>
            {t("addmycar_modalde_delete")}
            </button>
          </div>
        </div>
      </Modal>

      {/* Add Car Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Body>
          <div className="modal-icon">
            <i className="bi bi-car-front modal-icon-car"></i>
          </div>

          <div className="modal-body-1">
            <span id="modal-body-main">{t("addmycar_modal_title")}</span>
            <span className="modal-body-description">
            {t("addmycar_modal_des")}
            </span>
          </div>
          <Form.Group className="mb-3" controlId="carRegistration">
            <Form.Control type="text" placeholder={t("addmycar_modal_placeholder")} />
          </Form.Group>
        </Modal.Body>
        <div className="modal-footer-main">
          <div className="modal-footer-about">
            <button
              id="modal-footer-cancel"
              onClick={() => setShowAddModal(false)}
            >
              {t("addmycar_modal_cancel")}
            </button>
            <button
              id="modal-footer-ok"
              onClick={() => {
                const carReg = document.getElementById("carRegistration").value;
                if (carReg.trim()) {
                  addCarRegistration(carReg);
                  setShowAddModal(false); // Hide the modal
                }
              }}
            >
              {t("addmycar_modal_ok")}
            </button>
          </div>
        </div>
      </Modal>

      {/* Limit Car */}
      <Modal show={showLimitModal} onHide={() => setShowLimitModal(false)} centered>
        <Modal.Body>
          <div className="modal-icon">
            <i className="bi bi-car-front modal-icon-car"></i>
          </div>

          <div className="modal-body-1">
            <span id="modal-body-main">{t("addmycar_modalli_title")}</span>
            <span className="modal-body-description" style={{ fontWeight: "normal" }}>
            {t("addmycar_modalli_des1")}<p><u style={{ fontWeight: "bold" }}>2</u> {t("addmycar_modalli_des2")}</p>
            </span>
          </div>
        </Modal.Body>
        <div className="modal-footer-main">
          <div className="modal-footer-about">
            <button
              id="modal-footer-ok"
              onClick={() => 
                  setShowLimitModal(false)}
            >
              {t("addmycar_modalli_done")}
            </button>
          </div>
        </div>
      </Modal>

      {/* ------------------------------------------------------ */}

      <div className="parking-addcar-title">
        <button className="parking-addcar-chevron" onClick={() => navigate(-1)}>
          <i className="bi bi-chevron-left"></i>
        </button>

        <span className="parking-addcar-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-addcar-search">
        <div className="parking-addcar-search-main">
          <i className="bi bi-search"></i>
          <input
            id="parking-addcar-search"
            type="text"
            placeholder={t("addmycar_search")}
          />
        </div>
      </div>

      <div className="parking-addcar-body">
        <div className="parking-addcar-result">
          {/* Calculate the filtered cars and display their count */}
          <span id="parking-addcar-result">
            {t("addmycar_now")}&nbsp;
            {
              cars.filter((car) => {
                if (role === "Visitor") {
                  return !car.isMember; // Exclude members if the role is "Visitor"
                }
                return true; // Include all cars for other roles
              }).length
            }{" "}
            {t("addmycar_results")}
          </span>

          {/* add car */}
          <button id="parking-addcar-add" onClick={() => setShowAddModal(true)}>
            <i className="bi bi-plus-lg"></i>
            {t("addmycar_add")}
          </button>
        </div>

        <div className="parking-addcar-allcar">
          {cars
            .filter((car) => {
              // If role is "Visitor", exclude cars with isMember === true
              if (role === "Visitor") {
                return !car.isMember;
              }
              return true;
            })
            .slice()
            .sort((a, b) => b.isMember - a.isMember) // Sort members first
            .map((car) => {
              return (
                <div className="parking-addcar-mycar" key={car.id}>
                  <div
                    className="parking-addcar-trash"
                    onClick={() => handleDeleteClick(car.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </div>
                  <div className="parking-addcar-car">
                    <i className="bi bi-car-front"></i>
                  </div>
                  <div className="parking-addcar-info">
                    <span id="parking-addcar-registration">
                      {car.car_registration}
                    </span>{" "}
                    <br />
                    <span id="parking-addcar-status">
                      {car.isMember ? "Member" : "Visitor"}
                    </span>
                  </div>

                  {role === "Member" && (
                    <div className="parking-addcar-switch">
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={car.isMember}
                          onChange={() => toggleMembership(car.id)}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Parking_Addcar;
