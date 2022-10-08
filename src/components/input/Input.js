import React, { useContext } from "react";
import PropTypes from "prop-types";
import Error from "../common/Error";
import { withErrorBoundary } from "react-error-boundary";

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
        className={`${
          children && "pr-16"
        } bg-transparent w-full py-4 dark:text-white px-6 border rounded-xl text-text1 font-medium text-sm dark:placeholder:text-text2 placeholder:text-text4 ${
          error.length > 0 ? "border-error" : "border-stroke dark:border-darkStroke"
        }  `}
        {...rest}
      />
      <span className="absolute right-6 top-2/4 -translate-y-2/4">
        {children}
      </span>
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

export default withErrorBoundary(Input.apply, {
  FallbackComponents: <Error></Error>
});
