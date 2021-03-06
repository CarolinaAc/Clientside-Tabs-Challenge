import React from "react";
import { tabList } from "../constants";
import Button from "./Button";

const Navbar = ({ setTab, activeTab }) => {
  return (
    <nav title="Tabs user can choose between" className="tab-links">
      {tabList.map((el, key) => (
        <Button
          activeTab={activeTab}
          key={key}
          tab={el}
          onClick={() => setTab(el)}
        />
      ))}
    </nav>
  );
};

export default Navbar;
