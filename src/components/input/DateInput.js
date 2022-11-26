import { DatePicker } from "antd";
import React from "react";

const DateInput = ({ onChange = () => {}, className }) => {
  return (
    <div
      className={`overflow-hodden items-center flex border rounded-xl overflow-hidden hover:border-blue-400 dark:text-white text-sm   text-text1  duration-200 ${className}`}
    >
      <DatePicker format={'DD/MM/YYYY'} onChange={onChange}></DatePicker>
    </div>
  );
};

export default DateInput;
