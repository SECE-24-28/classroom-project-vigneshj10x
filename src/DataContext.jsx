import { createContext, useState } from 'react';

/* eslint-disable react-refresh/only-export-components */
export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;