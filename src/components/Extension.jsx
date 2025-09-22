import React from "react";
import ExtensionHead from "./ExtensionHead";
import ExtensionCard from "./ExtensionCard";
import { extensions } from "../data";

const Extension = () => {
  return (
    <div>
      <ExtensionHead />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {extensions.map((item, index)=>(
          <ExtensionCard key={index} {...item} />
        ))}
        </div>
    </div>
  );
};

export default Extension;
