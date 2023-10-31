/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Api } from '../../services/Api';
import { useData } from '../../Context';

export const SearchBar = () => {
  const { getUser } = Api();
  const { data } = useData();

  const [name, setName] = React.useState('');

  function handleReceiveValue(event) {
    console.log(name);
    event.preventDefault();
    getUser(name);
  }

  React.useEffect(() => {
    const searchName = '0rogerinho';
    getUser(searchName);
  }, []);

  return (
    <div className="flex justify-center text-[#4B6A9B] dark:text-[#ffffff]">
      <form
        onSubmit={handleReceiveValue}
        className="w-[20.4375rem] md:w-[35.8125rem] bg-[#ffffff] dark:bg-lightGray flex items-center rounded-xl mb-4 shadow-md "
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
            data ? ' text-[#ff0000]' : ''
          }`}
          id="search"
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Search GitHub username..."
        />
        <button className="bg-blue px-4 md:px-6 py-3 mr-[7px] md:mr-[10px] rounded-xl text-[#ffffff]">
          Search
        </button>
      </form>
    </div>
  );
};
