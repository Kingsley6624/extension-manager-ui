import React from "react";

const ExtensionHead = ({setFilter}) => {

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-[var(--head-color)] font-bold text-3xl">Extension List</h1>
      </div>
      <div className="flex gap-4">
        <button onClick={()=>setFilter('all')} className="bg-[var(--btn-bg)] px-4 py-1 rounded-full border border-[var(--border)]">All</button>
        <button  onClick={()=>setFilter('active')} className="bg-[var(--btn-bg)] px-4 py-1 rounded-full border border-[var(--border)]">Active</button>
        <button  onClick={()=>setFilter('inActive')} className="bg-[var(--btn-bg)] px-4 py-1 rounded-full border border-[var(--border)]">Inactive</button>
      </div>
    </div>
  );
};

export default ExtensionHead;
