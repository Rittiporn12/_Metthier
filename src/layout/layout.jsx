import { Outlet } from "react-router-dom";

import './layout.css';
import Navbar from "../Navbar/Navbar.jsx";
import NavbarCheck from "./navbarCheck.jsx";


function Layout() {
    return ( 
    <div className="layout-container">
        <Outlet />
        <div className="layout-navbar">
            <NavbarCheck>
                <Navbar />
            </NavbarCheck>
        </div>
    </div>
     );
}

export default Layout;