import React, { useState } from "react";
import ReactModal from "react-modal";
import IconClose from "../../components/icons/IconClose";
const defaultImage = `https://wallpaperaccess.com/full/508751.jpg`;

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      {showSearch && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 overlay" onClick={() => setShowSearch(false)}></div>
      )}
      <div className="relative z-50 flex-1">
        <div className=" flex items-center p-2 bg-white rounded-full shadow-lg w-full max-w-[458px] dark:bg-darkSecondary">
          <div className="flex-1 pl-4 pr-5">
            <input
              className="w-full text-sm bg-transparent focus:outline-none text-text1 placeholder:text-text4"
              type="text"
              placeholder="Do fundrise now"
              onClick={() => setShowSearch(true)}
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
        {showSearch && (
          <>
            <div className="pb-6   overflow-hidden search-results lg:w-[843px] md:w-[200%] bg-white dark:bg-darkSecondary top-full absolute left-0 z-50 translate-y-5 rounded-[20px] dark:text-white">
              <div className="flex items-center justify-between p-3 px-5 bg-graySoft dark:bg-darkSoft">
                <span className="text-sm font-medium underline">
                  See all 10,124 fundraisier
                </span>
                <button className="flex items-center justify-center w-16 h-12 rounded-xl bg-error bg-opacity-20 text-error" onClick={() => setShowSearch(false)}>
                  <IconClose></IconClose>
                </button>
              </div>
              <div className="px-10 pt-5">
                <div className="flex flex-col mb-6 gap-y-5">
                  <SearchResultItem></SearchResultItem>
                  <SearchResultItem></SearchResultItem>
                  <SearchResultItem></SearchResultItem>
                  <SearchResultItem></SearchResultItem>
                </div>
                <h3 className="mb-3 text-sm font-semibold dark:text-white">Related search</h3>
                <div className="flex flex-col text-sm gap-y-3 text-text2">
                  <p>
                    <strong>education</strong> fund
                  </p>
                  <p>schoolarship fund</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

function SearchResultItem() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultImage}
        className="object-cover w-12 h-12 rounded-lg"
        alt=""
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1 dark:text-white">
          Education fund for Durgham Family
        </h3>
        <p className="text-text3 ">By Durgham Family</p>
      </div>
    </div>
  );
}

export default Search;
