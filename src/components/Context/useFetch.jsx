import React from 'react';
import { user } from './UserData';

export const useFetch = () => {
  const { data, setData } = React.useContext(user);
  const [error, setError] = React.useState(null);

  async function request(url) {
    let response;
    let json;
    try {
      response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) {
          setError('Not Found');
        } else {
          setError('An error occurred');
        }
        return;
      }

      json = await response.json();
      setData(json);
      setError(null); // Clear any previous error

      if (!json) {
        console.log('Error: No data received');
      }
    } catch (err) {
      console.error('Error:', err);
      return setError('Usuario não existe');
    }
  }

  return { data, error, request };
};
