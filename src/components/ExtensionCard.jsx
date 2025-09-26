import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const ExtensionCard = ({
  id,
  name,
  description,
  logo,
  isActive,
  onToggle,
  onRemove,
}) => {
  return (
    <div className="bg-[var(--background)] rounded-2xl p-4 flex flex-col gap-6 justify-between border border-[var(--border)]">
      <div className="flex items-start gap-4">
        <img src={logo} alt="" />
        <div>
          <h4 className="font-bold text-[var(--head-color)] text-lg">
            {name}p
          </h4>
          <p className="text-[var(--neutral-600)]">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          className="bg-[var(--background)] text-[var(--text-color)]  rounded-full px-4 py-1 border border-[var(--neutral-300)] hover:text-[var(--neutral-0)] hover:bg-[var(--red-700)] hover:border-[var(--neutral-0)] outline  outline-transparent focus:outline-[var(--red-700)] focus:border-[var(--neutral-0)] focus:bg-[var(--neutral-100)] focus:text-[var(--neutral-800)] shadow-md"
          onClick={() => onRemove(id)}
        >
          remove
        </button>
        <ToggleSwitch
          isActive={isActive}
          onChange={(value) => onToggle(id, value)}
        />
      </div>
    </div>
  );
};

export default ExtensionCard;
