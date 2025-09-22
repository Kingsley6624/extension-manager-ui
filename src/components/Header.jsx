import React from "react";
import icon_sun from '../assets/images/icon-sun.svg'
import icon_moon from '../assets/images/icon-moon.svg'
import logo from '../assets/images/logo.svg'
 

const Header = () => {
  return (
    <header>
      <div className="bg-[var(--neutral-0)] flex justify-between items-center rounded-2xl p-3">
        <div className="">
          <img className="" src={logo} alt=""  />
          
        </div>
        <button className="bg-[var(--neutral-100)] p-3 rounded-lg"><img src={icon_moon} alt="" /></button>
      </div>
    </header>
  );
};

export default Header;
