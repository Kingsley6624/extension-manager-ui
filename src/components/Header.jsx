import React from "react";
import icon_sun from "../assets/images/icon-sun.svg";
import icon_moon from "../assets/images/icon-moon.svg";
import logo from "../assets/images/logo.svg";
import {useTheme} from '../context/ThemeContext'

const Header = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <header>
      <div className="bg-[var(--background)] flex justify-between items-center rounded-2xl p-2">
        <div className="">
          <img className="" src={logo} alt="" />
        </div>
        <button className="bg-[var(--btn-bg)] p-2 rounded-lg hover:bg-[var(--neutral-300)] border-2 border-transparent outline outline-2 outline-transparent focus:outline-[var(--red-700)] focus:border-[var(--neutral-0)] focus:bg-[var(--neutral-100)]"
        onClick={toggleTheme}
        >{theme === 'light' ? <img src={icon_moon} alt="" /> : <img src={icon_sun} alt="" />}
          
        </button>
      </div>
    </header>
  );
};

export default Header;
