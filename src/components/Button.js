import React from "react";

const Button = ({ tab, onClick, activeTab, number}) => {
  return (
    <button
      role='tab'
      aria-selected={tab === activeTab}
      aria-controls={`panel-${number}`}
      title={tab}
      className={`tab ${activeTab === tab && "active"}`}
      onClick={onClick}
    >
      {tab}
    </button>
  );
};

export default Button;
