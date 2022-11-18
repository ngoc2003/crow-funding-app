import React from "react";
import { Button, Dropdown } from "antd";
import PropTypes from "prop-types";
const DropdownInput = ({ data, item='', name = "", setItem = () => {} }) => {
  const handleMenuClick = (e) => {
    setItem(e.key);
  };
  const menu = {
    items: data,
    onClick: handleMenuClick,
  };
  return (
    <Dropdown menu={menu} style={{ display: "flex" }}>
      <Button
        style={{
          textAlign: "left",
          height: "100% ",
          borderRadius: "12px",
          padding: "12px 16px ",
        }}
      >
        {item || <span className="text-text4">Select {name}</span>}
      </Button>
    </Dropdown>
  );
};

Dropdown.propTypes = {
  data: PropTypes.array,
  item: PropTypes.string,
  name: PropTypes.string,
  setItem: PropTypes.func,
};

export default DropdownInput;
