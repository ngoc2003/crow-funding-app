import React, { useContext } from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const { control, children, name, type = "text", ...rest } = props;
  const field = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        className={`w-full py-4 px-6 border border-strock rounded-xl text-text1 font-medium text-sm placeholder:text-text4 `}
        {...field}
        {...rest}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  control: PropTypes.any.isRequired,
};

export default Input;
