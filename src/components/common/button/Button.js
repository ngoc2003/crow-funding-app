import React from "react";
import PropTypes from "prop-types";

const Button = ({
  type = "button",
  children,
  className,
  primary = false,
  secondary = false,
  isLoading = false,
  fluid = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-8 h-8 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      type={type}
      className={`py-3 text-base min-h-[56px] font-semibold rounded-xl flex items-center justify-center ${fluid && 'w-full' } px-4 text-white ${
        primary ? "bg-primary" : secondary ? "bg-secondary" : ""
      } ${isLoading && "pointer-events-none opacity-50"} ${className}`}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
