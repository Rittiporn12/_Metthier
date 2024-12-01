import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function navbarCheck({children}) {

    const [navbarShow, setNavbarShow] = useState(false);

    const location = useLocation();

    useEffect(() => {
        console.log(location);
        if (location.pathname === "/home" || location.pathname === "/select" || location.pathname === "/profile" || location.pathname === "/history" || location.pathname === "/qrcode") {
            setNavbarShow(true);
        }else{
            setNavbarShow(false);
        }
    }, [location])

    return ( 
        <div>
            {navbarShow && children}
        </div>
     );
}

export default navbarCheck;