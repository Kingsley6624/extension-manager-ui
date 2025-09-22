import React from "react";

const ExtensionHead = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-[var(--neutral-900)] font-bold text-3xl">Extension List</h1>
      </div>
      <div className="flex gap-4">
        <button className="bg-[var(--neutral-0)] px-3 py-1 rounded-full">All</button>
        <button className="bg-[var(--neutral-0)] px-3 py-1 rounded-full">Active</button>
        <button className="bg-[var(--neutral-0)] px-3 py-1 rounded-full">Inactive</button>
      </div>
    </div>
  );
};

export default ExtensionHead;
