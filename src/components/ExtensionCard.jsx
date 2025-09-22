import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const ExtensionCard = ({name, description, logo, isActive}) => {
  return (
    <div className="bg-[var(--neutral-0)] rounded-lg p-2 flex flex-col gap-6 ">
      <div className="flex">
        <img src={logo} alt="" />
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-[var(--neutral-0)]  rounded-full px-3 py-1 border border-[var(--neutral-600)]">remove</button>
        <ToggleSwitch isActive={isActive} />
      </div>
    </div>
  );
};

export default ExtensionCard;
