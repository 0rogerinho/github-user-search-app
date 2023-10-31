import React, { useContext } from 'react';
import { DataContext } from '../Context/DataProvider';

export const Api = () => {
  const { setData } = useContext(DataContext);
  const [error, setError] = React.useState(null);

  async function getUser(name) {
    try {
      console.log(name);
      const response = await fetch(`https://api.github.com/users/${name}`);

      const json = await response.json();

      setData(json);
    } catch (error) {
      setError(true);
      throw new Error(error);
    }
  }

  return { error, getUser };
};
