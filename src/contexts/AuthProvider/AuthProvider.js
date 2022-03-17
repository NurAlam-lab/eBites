import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';
import useFoods from '../../hooks/useFoods';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const { foods } = useFoods();
    const data = { foods, allContext };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;