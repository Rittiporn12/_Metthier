import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

import './Parking_Profile.css';
import line_icon from '../../assets/IMG/Parking_Profile/line_icon.png';

function Parking_Profile({ userData, setToken, setUserData }) {
    let navigate = useNavigate();

    const { t } = useTranslation();

    const handleLogout = () => {
        setToken('');
        setUserData(null);
        navigate("/");
    }

    return ( 
        <div className="parking-profile-container">

            <div className="parking-profile-title">
                <span className="parking-profile-name">
                    Smart Parking <br />
                </span>

                <i className="bi bi-person-circle parking-profile-profile"></i>
                <span className="parking-profile-names">
                    {userData.firstname + " " + userData.lastname}
                </span>
                <span className="parking-profile-phone">
                    {t('phone')}: {userData.phone}
                </span>
            </div>

            <div id="parking-profile-background"></div>

            <div className="parking-profile-body">
                
                <span id="parking-profile-about">
                    {t('accOverview')}
                </span>

                <Link to = "/editprofile">
                    <span id="parking-myprofile-about">
                        <i className="bi bi-person-circle profile-icon-profile"></i>
                        {t('myProfile')}
                        <i className="bi bi-chevron-right chevron-icon-profile"></i>
                    </span>
                </Link>

                <hr />

                <span id="parking-myprofile-about">
                    <img src={line_icon} alt="line_icon" id="line_icon" />
                    {t('connectWithLine')}
                    <i className="bi bi-chevron-right chevron-icon-profile"></i>
                </span>

                <hr /><span id="parking-myprofile-about" onClick={() => navigate("/addcar")}>
                    <i class="bi bi-car-front profile-icon-profile"></i>
                    {t('addMyCar')}
                    <i className="bi bi-chevron-right chevron-icon-profile"></i>
                </span>

                <hr />
                <Link to = "/setting">
                    <span id="parking-myprofile-about">
                        <i className="bi bi-gear profile-icon-profile"></i>
                        {t('setting')}
                        <i className="bi bi-chevron-right chevron-icon-profile"></i>
                    </span>
                </Link>

                <hr />

                <div className="parking-profile-button">
                    <button className="parking-profile-logout" onClick={() => handleLogout() }>
                        <i className="bi bi-box-arrow-right parking-profile-logout-icon"></i>
                        {t('logout')}
                        <i class="bi bi-chevron-right parking-profile-logout-chevron-icon"></i>
                    </button>
                </div>

            </div>

        </div>
     );
}

export default Parking_Profile;