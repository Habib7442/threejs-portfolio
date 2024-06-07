import React from "react";

const NavigationButton = ({ title, bgColor, textColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="rounded-2xl p-2 m-2">
      <button
        style={{ color: textColor }}
        className="transition duration-500 text-sm ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        {title}
      </button>
    </div>
  );
};

export default NavigationButton;
