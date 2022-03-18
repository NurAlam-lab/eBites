import React, { createContext } from 'react';
import useCart from '../../hooks/useCart';
import useFirebase from '../../hooks/useFirebase';
import useFoods from '../../hooks/useFoods';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    //hooks
    const allContext = useFirebase();
    const { foods } = useFoods();
    const { addToCart, selectedFood } = useCart();
    const data = { foods, allContext, addToCart, selectedFood };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;