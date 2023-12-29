/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { DataContext, useData } from '../../Context';
import { BiLoaderCircle } from 'react-icons/bi';

export const SearchBar = () => {
  const [name, setName] = React.useState('');
  const { setData } = useContext(DataContext);
  const [load, setLoad] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { data } = useData();
  console.log(error);

  const handleReceiveValue = React.useCallback(
    (event) => {
      event.preventDefault();
      setName('');
      setLoad(true);
      setTimeout(async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${name}`, {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            },
          });
          const json = await response.json();
          if (response.status !== 404) {
            setData(json);
          } else {
            setError(true);
          }
        } finally {
          setLoad(false);
        }
      }, 1000);
    },
    [name],
  );

  return (
    <div className="flex justify-center text-[#021737] dark:text-[#ffffff]">
      <form
        onSubmit={handleReceiveValue}
        className={`w-[20.4375rem] md:w-[35.8125rem] bg-[#ffffff] dark:bg-lightGray flex items-center rounded-xl mb-4 shadow-md border border-1 border-[rgba(0,0,0,0)] ${
          error && 'border-opacity-100 border-[#FF2F2F]'
        }`}
      >
        <label htmlFor="search">
          <img
            className="ml-4 md:ml-[2rem] mr-[.5594rem] md:mr-6 my-[1.25rem] w-[20px] h-[20px] md:w-6 md:h-6"
            src="icon-search.svg"
            alt=""
          />
        </label>
        <input
          className={`w-[11.5rem] md:w-[23.125rem] mr-[.4375rem] dark:bg-lightGray text-[.7188rem] md:text-[1.125rem] outline-none ${
            data ? ' text-blue' : ''
          }`}
          id="search"
          value={name}
          onChange={({ target }) => {
            setName(target.value);
            setError(false);
          }}
          required
          placeholder="Search GitHub username..."
        />
        {error && (
          <span className="absolute font-medium text-[#FF2F2F] right-[386px] top-[75px]">
            User Not Found
          </span>
        )}
        <button className="bg-blue w-[100px] h-[50px] md:px-6 mr-[7px] md:mr-[10px] rounded-xl text-[#ffffff] font-bold">
          {load ? <BiLoaderCircle className="m-auto animate-spin" /> : 'Search'}
        </button>
      </form>
    </div>
  );
};
