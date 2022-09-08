import React, { useState } from "react";

const useToggleValue = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const handleToggleValue = () => {
    setValue(!value);
  };
  return {value, handleToggleValue};
};

export default useToggleValue;
