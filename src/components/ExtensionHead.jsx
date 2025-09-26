import React from "react";

const ExtensionHead = ({setFilter}) => {

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-[var(--text-color)] font-bold text-3xl">Extension List</h1>
      </div>
      <div className="flex gap-4">
        <button onClick={()=>setFilter('all')} className="bg-[var(--btn-bg)] text-[var(--text-color)] px-4 py-1 rounded-full border border-[var(--border)] shadow">All</button>
        <button  onClick={()=>setFilter('active')} className="bg-[var(--btn-bg)] text-[var(--text-color)] px-4 py-1 rounded-full border border-[var(--border)] shadow">Active</button>
        <button  onClick={()=>setFilter('inActive')} className="bg-[var(--btn-bg)] text-[var(--text-color)] px-4 py-1 rounded-full border border-[var(--border)] shadow">Inactive</button>
      </div>
    </div>
  );
};

export default ExtensionHead;
