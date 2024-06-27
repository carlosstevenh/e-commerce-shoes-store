import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [car, setCar] = useState([]);
  const [alertVisible, setAlertVisible] = useState({});
  const [alert, setAlert] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    axios.get('data.json').then((res) => setData(res.data));
  }, []);
  return (
    <dataContext.Provider
      value={{
        data,
        car,
        setCar,
        alertVisible,
        setAlertVisible,
        alert,
        setAlert,
        showAlert,
        setShowAlert,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
