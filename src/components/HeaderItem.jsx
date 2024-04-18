import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div
      className="text-white flex items-center gap-3
    text-[15px] font-semibold cursor-pointer hover:text-gray-300"
    >
      <Icon />
      <p>{name}</p>
    </div>
  );
}

export default HeaderItem;
