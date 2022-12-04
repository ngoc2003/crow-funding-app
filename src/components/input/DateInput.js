import { DatePicker } from "antd";
import React from "react";

const DateInput = ({ onChange = () => {}, className }) => {
  return (
    <div
      className={`items-center flex border rounded-xl overflow-hidden hover:border-blue-400 dark:text-white text-sm   text-text1  duration-200 dark:border-darkStroke ${className}`}
    >
      <DatePicker format={'DD/MM/YYYY'} onChange={onChange}></DatePicker>
    </div>
  );
};

export default DateInput;
