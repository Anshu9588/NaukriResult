"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function SearchInput({ data }) {
  const [searchInput, setSearchinput] = useState("");
  const [result, setResult] = useState([]);
  const inputhandler = (event) => {
    let value = event.target.value;
    value = value.toLowerCase();
    setSearchinput(value);
  };
  useEffect(() => {
    if (searchInput.trim() === "") {
      setResult([]);
      return;
    }
    const filteredResults = data.filter((element) =>
      element.nameOfPost.toLowerCase().includes(searchInput.toLowerCase())
    );
    filteredResults.reverse()
    setResult(filteredResults);
  }, [searchInput, data, setResult]);
  const resetSearchInputHandler = () => {
    setSearchinput("");
  };
  let clearButtonClass =
    searchInput !== ""
      ? "border ml-2 text-white border-indigo-500 px-3 py-1 bg-indigo-600 rounded-full cursor-pointer"
      : "opacity-0 border ml-2 text-white border-indigo-500 px-3 py-1 bg-indigo-600 rounded-full";
  return (
    <>
      <form className="flex noen justify-center my-2 relative " action="#">
        <input
          type="text"
          className="rounded-full py-1  placeholder:italic placeholder:text-sm placeholder:text-center w-96 tracking-wide border outline-none px-2 max-md:drop-shadow-[0_3px_0_rgba(0,0,0,0.10)] max-sm:drop-shadow-[0_1.5px_0_rgba(0,0,0,0.10)] drop-shadow-[0_5px_0_rgba(0,0,0,0.10)] "
          value={searchInput}
          onChange={inputhandler}
          placeholder="Search Jobs, Result or Anything your want."
        />
        <div onClick={resetSearchInputHandler} className={clearButtonClass}>
          Clear
        </div>
        {result.length > 0 && (
          <ul className="absolute w-2/4 top-8 max-h-40 overflow-y-auto z-10 divide-y-2 bg-white border border-gray-300 rounded shadow-md">
            {result.map((list) => {
              return (
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  key={list.nameOfPost}
                >
                  {" "}
                  <Link href={list.seoLink}>{list.nameOfPost}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </>
  );
}
