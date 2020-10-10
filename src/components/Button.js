import React from "react";

const Button = ({ tab, onClick, activeTab }) => {
  return (
    <button
      title={tab}
      className={`tab ${activeTab === tab && "active"}`}
      onClick={onClick}
    >
      {tab}
    </button>
  );
};

export default Button;
