import React from "react";
import logo from "../../assets/logo.jpg"
const Header = () =>{
    return(
        <div className="w-1100 flex items-center justify-between bg-red-600">
            <img src={logo} alt="Logo" className="w-[240px] h-[70] object-contain"/>
        </div>
    )
}
export default Header;