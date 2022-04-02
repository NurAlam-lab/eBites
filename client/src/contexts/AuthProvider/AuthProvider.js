import React, { createContext } from 'react';
import useCart from '../../hooks/useCart';
import useFirebase from '../../hooks/useFirebase';
import useFoods from '../../hooks/useFoods';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    //hooks
    const allContext = useFirebase();
    const { foods, totalPages, currentPage, setCurrentPage } = useFoods();
    const { addToCart, selectedFood, remove } = useCart();
    const data = {
        foods,
        totalPages,
        allContext,
        addToCart,
        selectedFood,
        remove,
        currentPage,
        setCurrentPage
    };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;