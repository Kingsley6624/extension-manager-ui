import React, { useState } from "react";

const ToggleSwitch = ({isActive}) => {
  const [isChecked, setIsChecked] = useState(isActive);

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="sr-only"
        />
        <div
          className={`w-10 h-6 rounded-full shadow-inner ${
            isChecked ? "bg-[var(--red-700)]" : "bg-[var(--neutral-300)]"
          }`}
        ></div>
        <div
          className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
            isChecked ? "translate-x-4" : ""
          }`}
        ></div>
      </div>
      {/* <span className="ml-3 text-sm text-[var(--neutral-900)]">
        {isChecked ? 'Enabled' : 'Disabled'}
      </span> */}
    </label>
  );
};

export default ToggleSwitch;
