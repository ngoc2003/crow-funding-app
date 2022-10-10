import React from "react";
import IconClose from '../../components/icons/IconClose'

const Search = () => {
  return (
    <div className="relative flex-1 z-50">
      <div className=" flex items-center p-2 bg-white rounded-full shadow-lg w-full max-w-[458px]">
        <div className="flex-1 pl-4 pr-5">
          <input
            className="w-full text-sm bg-transparent focus:outline-none text-text1 placeholder:text-text4"
            type="text"
            placeholder="Do fundrise now"
          />
        </div>
        <button className="flex-shrink-0 w-[72px] h-10 flex items-center justify-center rounded-full text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="pb-6 px-4  overflow-hidden search-results w-[843px] bg-white top-full absolute left-0 z-50 translate-y-5 rounded-[20px] ">
        <div className="flex items-center justify-between p-3 bg-graySoft">
          <span className="font-medium text-sm underline">See all 10,124 fundraisier</span>
          <button className="flex items-center justify-center w-16 h-12 rounded-xl bg-error bg-opacity-20 text-error">
            <IconClose></IconClose>
          </button>
        </div>
        <div className="py-5">
          
        </div>

      </div>
    </div>
  );
};

export default Search;
