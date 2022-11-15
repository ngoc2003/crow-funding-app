import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import IconEyeToggle from "../icons/IconEyeToggle";
Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default function Input({ children, icon = false, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const { error = "", name, placeholder, ...rest } = props;
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div
        className={`items-center flex border rounded-xl overflow-hidden ${
          error.length > 0
            ? "border-error"
            : "border-stroke dark:border-darkStroke"
        }`}
      >
        <input
          type={!showPassword && icon ? "password" : "text"}
          placeholder={placeholder}
          className={`outline-none   bg-transparent w-full py-4 dark:text-white px-3   text-text1 font-medium text-sm dark:placeholder:text-text2 placeholder:text-text4   `}
          {...rest}
        />
        {icon && (
          <IconEyeToggle
            toggle={showPassword}
            onClick={handleTogglePassword}
          ></IconEyeToggle>
        )}
      </div>
      {error.length > 0 && (
        <span
          className={" text-sm font-medium pointer-events-none text-error "}
        >
          {error}
        </span>
      )}
    </>
  );
}
