import React from "react";
import icon_sun from "../assets/images/icon-sun.svg";
import icon_moon from "../assets/images/icon-moon.svg";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="bg-[var(--neutral-0)] flex justify-between items-center rounded-2xl p-2">
        <div className="">
          <img className="" src={logo} alt="" />
        </div>
        <button className="bg-[var(--neutral-100)] p-2 rounded-lg hover:bg-[var(--neutral-300)] border-2 border-transparent outline outline-2 outline-transparent focus:outline-[var(--red-700)] focus:border-[var(--neutral-0)] focus:bg-[var(--neutral-100)]">
          <img src={icon_moon} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
