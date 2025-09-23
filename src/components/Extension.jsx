import React, { useActionState, useState } from "react";
import ExtensionHead from "./ExtensionHead";
import ExtensionCard from "./ExtensionCard";
import { extensions } from "../data";

const Extension = () => {
  const [filter, setFilter] = useState("all");
  const [data, setData] = useState(extensions);

  const handleToggle = (id, value) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isActive: value } : item))
    );
  };
  const handRemove = (id) => {
    setData((prev)=> prev.filter((item) => item.id !== id))
  }

  const filterData = data.filter((item) => {
    if (filter === "all") return true;
    if (filter === "active") return item.isActive;
    if (filter === "inActive") return !item.isActive;
  });
  return (
    <div className="flex flex-col gap-6">
      <ExtensionHead setFilter={setFilter} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {filterData.map((item) => (
          <ExtensionCard key={item.id} {...item} onToggle={handleToggle} onRemove={handRemove} />
        ))}
      </div>
    </div>
  );
};

export default Extension;
