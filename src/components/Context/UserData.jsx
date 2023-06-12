import React from 'react';
export const user = React.createContext();
const UserData = ({ children }) => {
  const [data, setData] = React.useState(null);
  return <user.Provider value={{ data, setData }}>{children}</user.Provider>;
};

export default UserData;
