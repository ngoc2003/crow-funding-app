import React, { useContext } from "react";
import PropTypes from "prop-types";

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default function Input({ children, ...props }) {
  const { error = "", name, type = "text", placeholder, ...rest } = props;
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className={`${children && "pr-16"} outline-none ${
          !error && "focus:outline-primary"
        }  bg-transparent w-full py-4 dark:text-white px-6 border rounded-xl text-text1 font-medium text-sm dark:placeholder:text-text2 placeholder:text-text4 ${
          error.length > 0
            ? "border-error"
            : "border-stroke dark:border-darkStroke"
        }  `}
        {...rest}
      />
      {children && (
        <div className="absolute inline-block right-6 top-2/4 -translate-y-2/4">
          {/* {children} */}
        </div>
      )}
      {error.length > 0 && (
        <span
          className={
            " text-sm font-medium pointer-events-none text-error "
          }
        >
          {error}
        </span>
      )}
    </div>
  );
}
