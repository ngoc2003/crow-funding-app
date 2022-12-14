import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import IconClose from "../../components/icons/IconClose";
import { useDebounce } from "../../hooks/useDebounce";
import axios from "axios";
import { apiURL } from "../../config/config";
import { v4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
const defaultImage = `https://wallpaperaccess.com/full/508751.jpg`;

const Search = () => {
  const [data, setData] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchValueDebounce = useDebounce(searchValue);
  function handleSearch(e) {
    setSearchValue(e.target.value);
  }
  useEffect(() => {
    const fetchData = async () => {
      if (searchValueDebounce) {
        const response = await axios.get(`${apiURL}/search`, {
          params: { value: searchValueDebounce },
        });
        setData(response.data);
      }
    };
    fetchData();
  }, [searchValueDebounce]);
  return (
    <>
      {showSearch && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 overlay"
          onClick={() => setShowSearch(false)}
        ></div>
      )}
      <div className="relative z-50 flex-1">
        <div className=" flex items-center p-2 bg-white rounded-full shadow-lg w-full max-w-[458px] dark:bg-darkSecondary">
          <div className="flex-1 pl-4 pr-5">
            <input
              defaultValue={""}
              value={searchValue}
              className="w-full text-sm bg-transparent focus:outline-none dark:text-white text-text1 placeholder:text-text4"
              type="text"
              placeholder="Do fundrise now"
              onClick={() => setShowSearch(true)}
              onChange={handleSearch}
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
                  See all {data.length} fundraisier
                </span>
                <button
                  className="flex items-center justify-center w-16 h-12 rounded-xl bg-error bg-opacity-20 text-error"
                  onClick={() => setShowSearch(false)}
                >
                  <IconClose></IconClose>
                </button>
              </div>
              <div className="px-10 pt-5">
                <div className="flex flex-col mb-6 gap-y-5">
                  {data.length ?
                    data.map((item) => (
                      <SearchResultItem
                        data={item}
                        key={v4()}
                        onClick={(e) => {setShowSearch(false)}}
                      ></SearchResultItem>
                    )) : <span>No result is founded</span>}
                </div>
                {/* <h3 className="mb-3 text-sm font-semibold dark:text-white">
                  Related search
                </h3>
                <div className="flex flex-col text-sm gap-y-3 text-text2">
                  <p>
                    <strong>education</strong> fund
                  </p>
                  <p>schoolarship fund</p>
                </div> */}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

function SearchResultItem({data, onClick=() => {}, ...props}) {
  return (
    <a href={`/campaign/${data._id}`} onClick={onClick} className="flex items-center gap-x-5" {...props} >
      <img
        src={data.image || defaultImage}
        className="object-cover w-12 h-12 rounded-lg"
        alt=""
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1 dark:text-white">
          {data.title}
        </h3>
        <p className="text-text3 ">By {data.author}</p>
      </div>
    </a>
  );
}

export default Search;
