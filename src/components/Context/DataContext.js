import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [car, setCar] = useState([]);

  useEffect(() => {
    axios.get('data.json').then((res) => setData(res.data));
  }, []);
  return (
    <dataContext.Provider value={{ data, car, setCar }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
