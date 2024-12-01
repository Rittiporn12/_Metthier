import React from 'react';
import Webcam from 'react-webcam';
import { useTranslation } from "react-i18next";

import './Parking_Qrcode.css';

function Parking_Qrcode() {
    const { t } = useTranslation();
    return (
        <div className="parking-qrcode-container">

            <div className="parking-qrcode-title">
                <span className="parking-qrcode-name">
                    Smart Parking <br />
                </span>
            </div>

            <div className="parking-qrcode-body">

                <div className="parking-qrcode-main">

                    <span id="parking-qrcode-name">
                    {t("scanqrcode_title")}
                    </span>

                    <span id="parking-qrcode-description">
                    {t("scanqrcode_des")}
                    </span>

                </div>

                <div className="parking-qrcode-camera">

                    <div className='parking-qrcode-webcam'>
                        <Webcam />
                    </div>
                    
                    <div className="parking-qrcode-cornor1"></div>
                    <div className="parking-qrcode-cornor2"></div>
                    <div className="parking-qrcode-cornor3"></div>
                    <div className="parking-qrcode-cornor4"></div>

                    <div className="parking-qrcode-about">

                        <span id="parking-qrcode-about">
                        {t("scanqrcode_about")}&nbsp;&nbsp;.&nbsp;&nbsp;.&nbsp;&nbsp;.
                        </span>

                        <label for="file-input" className="parking-qrcode-file-upload">
                            <i className="bi bi-image-fill"></i> 
                        </label>
                        <input id="file-input" type="file" />

                    </div>

                </div>

            </div>
            
        </div>
    );
}

export default Parking_Qrcode;