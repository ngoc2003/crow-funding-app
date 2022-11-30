import React from "react";

const Textarea = ({ placeholder = "Placeholder", className, ...rest }) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`outline-none border rounded-xl resize-none hover:border-blue-400 duration-200  dark:border-darkStroke   bg-transparent w-full py-4 dark:text-white px-3   text-text1 font-medium text-sm dark:placeholder:text-text2 placeholder:text-text4 ${className}  `}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
