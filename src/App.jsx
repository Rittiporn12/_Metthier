import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Outlet } from "react-router";

import Parking_Login from './Page/Parking_Login/Parking_Login.jsx';
import Parking_Home from './Page/Parking_Home/Parking_Home.jsx';
import Layout from './layout/layout.jsx'
import Parking_Status from './Page/Parking_Status/Parking_Status.jsx';
import Parking_Select from './Page/Parking_Status/Parking_Select.jsx';
import Parking_Payment from './Page/Parking_Status/Parking_Payment.jsx'
import Parking_History from './Page/Parking_History/Parking_History.jsx';
import Parking_Checkhistory from './Page/Parking_History/Parking_Checkhistory.jsx'
import Parking_Profile from './Page/Parking_Profile/Parking_Profile.jsx';
import Parking_Editprofile from './Page/Parking_Profile/Parking_Editprofile.jsx'
import Parking_Qrcode from './Page/Parking_QRCode/Parking_Qrcode.jsx';
import Parking_Findzone from './Page/Parking_Findzone/Parking_Findzone.jsx'
import Parking_Addcar from './Page/Parking_Addcar/Parking_Addcar.jsx';
import Parking_Appointment from './Page/Parking_Appointment/Parking_Appointment.jsx';
import Parking_AppointmentNotify from './Page/Parking_AppointmentNotify/Parking_AppointmentNotify.jsx';
import Parking_Setting from './Page/Parking_Setting/Parking_Setting.jsx'
import Parking_Language from './Page/Parking_Setting/Parking_Language.jsx'
import Parking_Account from './Page/Parking_Setting/Parking_Account.jsx'
import Parking_Notification from './Page/Parking_Setting/Parking_Notification.jsx'
import Parking_Information from './Page/Parking_Setting/Parking_Information.jsx'
import Parking_Signup from './Page/Parking_Login/Parking_Signup.jsx';
import Parking_Verify from './Page/Parking_Login/Parking_Verify.jsx';
import Parking_Resetpassword from './Page/Parking_Login/Parking_Forgot/Parking_Resetpassword.jsx';
import Parking_Resetverify from './Page/Parking_Login/Parking_Forgot/Parking_Resetverify.jsx';
import Parking_Resetpasswordinput from './Page/Parking_Login/Parking_Forgot/Parking_Resetpasswordinput.jsx';

import { checkToken } from "./Data/UserData";

import './App.css';

function App() {

  const [token, setToken] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log(userData);
  }, []);

  useEffect(() => {
    if (token) {
      const verifiedData = checkToken(token);
      setUserData(verifiedData);
    } else {
      setUserData(null);
    }
  }, [token]);


  if (token && userData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-container">
      <HashRouter>
        <Routes>
          {/* Public Routes */}
          {!token ? (
            <>
              <Route path="/" element={<Parking_Login setToken={setToken} />} />
              <Route path="signup" element={<Parking_Signup />} />
              <Route path="verify" element={<Parking_Verify />} />
              <Route path="resetpassword" element={<Parking_Resetpassword />} />
              <Route path="resetverify" element={<Parking_Resetverify />} />
              <Route path="resetpasswordinput" element={<Parking_Resetpasswordinput />} />
              {/* Redirect to login if no route matches */}
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              {/* Protected Routes */}
              <Route path="/" element={<Layout />}>
              <Route index path="home" element={<Parking_Home userData={userData} setUserData={setUserData} />} />
              <Route path='status' element={<Parking_Status />} />
              <Route path='select' element={<Parking_Select role={userData.role} />} />
              <Route path='payment' element={<Parking_Payment />} />
              <Route path='qrcode' element={<Parking_Qrcode />} />
              <Route path='history' element={<Parking_History />} />
              <Route path='checkhistory' element={<Parking_Checkhistory />} />
              <Route path='profile' element={<Parking_Profile userData={userData} setUserData={setUserData} setToken={setToken} />} />
              <Route path='editprofile' element={<Parking_Editprofile userData={userData} setUserData={setUserData}/>} />
              <Route path='findzone' element={<Parking_Findzone />} />
              <Route path='addcar' element={<Parking_Addcar role={userData.role} />} />
              <Route path='appointment' element={<Parking_Appointment />} />
              <Route path='appointmentnotify' element={<Parking_AppointmentNotify />} />
              <Route path='setting' element={<Parking_Setting setToken={setToken} />} />
              <Route path='language' element={<Parking_Language />} />
              <Route path='account' element={<Parking_Account userData={userData} />} />
              <Route path='notification' element={<Parking_Notification />} />
              <Route path='information' element={<Parking_Information />} />
                {/* Redirect to home if no route matches */}
                <Route path="*" element={<Navigate to="/home" />} />
              </Route>
            </>
          )}
        </Routes>
      </HashRouter>
    </div>
  );

}

export default App
