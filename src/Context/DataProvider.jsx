/* eslint-disable react-refresh/only-export-components */
import React from 'react';

export const DataContext = React.createContext(null);

export const useData = () => React.useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = React.useState();
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
