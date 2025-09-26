import React, { useState } from "react";

const ToggleSwitch = ({isActive, onChange}) => {


  return (
    <label tabIndex={0} className="flex items-center cursor-pointer border-2 border-transparent outline outline-2 outline-transparent focus:outline-[var(--red-700)] focus:border-[var(--neutral-0)] rounded-full">
      <div className="relative">
        <input
          type="checkbox"
          checked={isActive}
          onChange={() => onChange(!isActive)}
          className="sr-only"
        />
        <div
          className={`w-10 h-6 rounded-full shadow-inner ${
            isActive ? "bg-[var(--toggle-btn)] hover:bg-[var(--red-500)]" : "bg-[var(--neutral-300)]"
          }`}
        ></div>
        <div
          className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
            isActive ? "translate-x-4" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
