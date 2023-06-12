import React from 'react';
import { user } from './UserData';
export const useFetch = () => {
  const { data, setData } = React.useContext(user);

  const token = import.meta.env.VITE_GITHUB;

  async function request(url) {
    let response;
    let json;
    try {
      response = await fetch(url);
      json = await response.json();
      setData(json);
    } catch {}
  }
  return { data, request };
};
