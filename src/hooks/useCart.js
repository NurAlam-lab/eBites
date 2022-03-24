import { useState } from "react";


const useCart = () => {
    const [selectedFood, setSelectedFood] = useState([]);
    function addToCart(matchingFood) {
        const isHave = selectedFood.find((selected) => selected.id === matchingFood.id);
        if (isHave) {
            alert('Dishes has been added')
        } else {
            const newSelection = [...selectedFood, matchingFood];
            setSelectedFood(newSelection);
        }
    }



    function remove(id) {
        const foodAfterRemove = selectedFood.filter((food) => food.id != id);
        setSelectedFood(foodAfterRemove);
    }
    return { addToCart, selectedFood, remove }
};

export default useCart;