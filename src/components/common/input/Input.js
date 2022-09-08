import React, { useContext } from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    error = "",
    control,
    children,
    name,
    type = "text",
    placeholder,
    ...rest
  } = props;
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={error.length > 0 ? "" : placeholder}
        className={`w-full py-4 px-6 border rounded-xl text-text1 font-medium text-sm placeholder:text-text4 ${
          error.length > 0 ? "border-error" : "border-stroke"
        } `}
        {...rest}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none error-input top-2/4 -translate-y-2/4 text-error left-6">
          {error}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
