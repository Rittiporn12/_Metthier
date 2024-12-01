import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import historyData from "../../Data/historyData";

import moment from "moment";

import "./Parking_History.css";

function Parking_History() {
  let navigate = useNavigate();

  const { t } = useTranslation();

  const [hisData, setHisData] = React.useState(historyData);

  React.useEffect(() => {
    // Load data from localStorage or use default data
    const savedHistoryData = localStorage.getItem("hisData");
    const parsedData = savedHistoryData ? JSON.parse(savedHistoryData) : historyData;

    // Sort by date in descending order
    const sortedData = parsedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Set sorted data to state
    setHisData(sortedData);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("hisData", JSON.stringify(hisData));
  }, [hisData]);

  React.useEffect(() => {
    console.log(hisData);
  }, []);

  function msToHours(ms) {
    return Math.floor(ms / 3600000);
  }

  return (
    <div className="parking-history-container">
      <div className="parking-history-title">
        <span className="parking-history-name">
          Smart Parking <br />
        </span>
      </div>

      <div className="parking-history-body">
        <div className="parking-history-input">
          <i className="bi bi-search"></i>
          <input
            type="text"
            id="parking-history-search"
            placeholder={t('historySearch')}
          />
          <select id="parking-history-dropdown">
            <option value="" disabled selected>
              {/* fix later */}
              Select Car
            </option>
            <option value="Car1">ABC-123</option>
            <option value="Car2">DEF-456</option>
            <option value="Car3">GHI-789</option>
            <option value="Car4">CDF-494</option>
          </select>
        </div>

        <div className="parking-history-lasted">
          <span id="parking-history-lasted">{t('lastest')}</span>

          {/* --------------------------------------- */}

          {hisData.length > 0 && (
            <>
              {/* Most Recent Entry */}
              <div
                className="parking-history-lasted-border"
                onClick={() =>
                  navigate("/checkhistory", {
                    state: { historyInfo: hisData[0] },
                  })
                }
                key={hisData[0].id}
              >
                <div className="parking-lasted-car">
                  <i className="bi bi-car-front"></i>
                  <div className="parking-lasted-registration">
                    <span>{hisData[0].car}</span>
                  </div>
                </div>
                <div className="parking-lasted-info">
                  <span id="parking-lasted-date">
                    <i className="bi bi-calendar-event"></i>
                    {moment(hisData[0].date).format("DD MMMM YYYY")}
                  </span>
                  <span id="parking-lasted-zone">
                    <i className="bi bi-geo-alt-fill"></i>
                    {t("zone")} {hisData[0].zone}
                    <span id="parking-lasted-amount">
                      <i className="bi bi-credit-card-fill"></i>
                      {hisData[0].total > 0 ? "฿" + hisData[0].total : t("free")}
                    </span>
                  </span>
                  <span id="parking-lasted-time">
                    <i className="bi bi-clock-fill"></i>
                    {msToHours(
                      moment(hisData[0].leaveTime).diff(moment(hisData[0].date))
                    )}{" "}
                    {t("hour")}
                  </span>
                </div>
                <i className="bi bi-chevron-right chevron-icon"></i>
              </div>

              {/* History Section */}
              {hisData.length > 1 && (
                <div>
                  <span id="parking-history-lasted">{t("history")}</span>
                  <div className="parking-history-scroll">
                    {hisData.slice(1).map((item) => (
                      <div
                        className="parking-history-history-border"
                        onClick={() =>
                          navigate("/checkhistory", {
                            state: { historyInfo: item },
                          })
                        }
                        key={item.id}
                      >
                        <div className="parking-history-car">
                          <i className="bi bi-car-front"></i>
                          <div className="parking-history-registration">
                            <span>{item.car}</span>
                          </div>
                        </div>
                        <div className="parking-history-info">
                          <span id="parking-history-date">
                            <i className="bi bi-calendar-event"></i>
                            {moment(item.date).format("DD MMMM YYYY")}
                          </span>
                          <span id="parking-history-zone">
                            <i className="bi bi-geo-alt-fill"></i>
                            {t("zone")} {item.zone}
                            <span id="parking-history-amount">
                              <i className="bi bi-credit-card-fill"></i>
                              {item.total > 0 ? "฿" + item.total : t("free")}
                            </span>
                          </span>
                          <span id="parking-history-time">
                            <i className="bi bi-clock-fill"></i>
                            {msToHours(
                              moment(item.leaveTime).diff(moment(item.date))
                            )}{" "}
                            {t("hour")}
                          </span>
                        </div>
                        <i className="bi bi-chevron-right chevron-history-icon"></i>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
          {/* --------------------------------------- */}
        </div>

        {/* <div className="parking-history-parking">

                    <span id="parking-history-lasted">
                        History Parking
                    </span>

                    <div className="parking-history-scroll">

                        <div className="parking-history-history-border">
                            <div className="parking-history-car">
                                <i className="bi bi-car-front"></i>
                                <div className="parking-history-registration">
                                    <span>DEF - 456</span>
                                </div>
                            </div>

                            <div className="parking-history-info">
                                <span id="parking-history-date">
                                    <i className="bi bi-calendar-event"></i>
                                    9 October 2024
                                </span>
                                <span id="parking-history-zone">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    ZONE B
                                    <span id="parking-history-amount">
                                        <i className="bi bi-credit-card-fill"></i>
                                        ฿0
                                    </span>
                                </span>
                                <span id="parking-history-time">
                                    <i className="bi bi-clock-fill"></i>
                                    5 Hours
                                </span>
                            </div>
                            <i className="bi bi-chevron-right chevron-history-icon"></i>
                        </div>

                        <div className="parking-history-history-border">
                            <div className="parking-history-car">
                                <i className="bi bi-car-front"></i>
                                <div className="parking-history-registration">
                                    <span>GHI - 789</span>
                                </div>
                            </div>

                            <div className="parking-history-info">
                                <span id="parking-history-date">
                                    <i className="bi bi-calendar-event"></i>
                                    8 October 2024
                                </span>
                                <span id="parking-history-zone">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    ZONE A
                                    <span id="parking-history-amount">
                                        <i className="bi bi-credit-card-fill"></i>
                                        ฿0
                                    </span>
                                </span>
                                <span id="parking-history-time">
                                    <i className="bi bi-clock-fill"></i>
                                    7 Hours
                                </span>
                            </div>
                            <i className="bi bi-chevron-right chevron-history-icon"></i>
                        </div>

                        <div className="parking-history-history-border">
                            <div className="parking-history-car">
                                <i className="bi bi-car-front"></i>
                                <div className="parking-history-registration">
                                    <span>JKL - 324</span>
                                </div>
                            </div>

                            <div className="parking-history-info">
                                <span id="parking-history-date">
                                    <i className="bi bi-calendar-event"></i>
                                    8 October 2024
                                </span>
                                <span id="parking-history-zone">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    ZONE A
                                    <span id="parking-history-amount">
                                        <i className="bi bi-credit-card-fill"></i>
                                        ฿100
                                    </span>
                                </span>
                                <span id="parking-history-time">
                                    <i className="bi bi-clock-fill"></i>
                                    6 Hours
                                </span>
                            </div>
                            <i className="bi bi-chevron-right chevron-history-icon"></i>
                        </div>

                        <div className="parking-history-history-border">
                            <div className="parking-history-car">
                                <i className="bi bi-car-front"></i>
                                <div className="parking-history-registration">
                                    <span>MNO - 567</span>
                                </div>
                            </div>

                            <div className="parking-history-info">
                                <span id="parking-history-date">
                                    <i className="bi bi-calendar-event"></i>
                                    7 October 2024
                                </span>
                                <span id="parking-history-zone">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    ZONE C
                                    <span id="parking-history-amount">
                                        <i className="bi bi-credit-card-fill"></i>
                                        ฿300
                                    </span>
                                </span>
                                <span id="parking-history-time">
                                    <i className="bi bi-clock-fill"></i>
                                    7 Hours
                                </span>
                            </div>
                            <i className="bi bi-chevron-right chevron-history-icon"></i>
                        </div>

                    </div>


                </div> */}
      </div>
    </div>
  );
}

export default Parking_History;
