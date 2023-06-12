import React from 'react';
import { useFetch } from './Context/useFetch';
import { user } from './Context/UserData';

const SearchBar = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [searchName, setSearchName] = React.useState('');

  const { request } = useFetch();
  const { data } = React.useContext(user);

  function handleChangeValue(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  function handleReceiveValue(event) {
    event.preventDefault();
    setSearchName(inputValue);
    setInputValue('');
  }

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = request(
        `https://api.github.com/users/${
          data === null ? 'octocat' : searchName
        }`,
      );
    }
    fetchData();
  }, [searchName]);

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
          id="search"
          value={inputValue}
          onChange={handleChangeValue}
          className="w-[11.5rem] md:w-[23.125rem] mr-[.4375rem] dark:bg-lightGray text-[.7188rem] md:text-[1.125rem] outline-none"
          type="text"
          placeholder="Search GitHub username..."
        />
        <button className="bg-blue px-4 md:px-6 py-3 mr-[7px] md:mr-[10px] rounded-xl text-[#ffffff]">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
