import React from 'react';
import useAuth from '../../hooks/useAuth';

const Foods = () => {
    const { foods } = useAuth();
    return (
        <div>
            {foods.length}
        </div>
    );
};

export default Foods;