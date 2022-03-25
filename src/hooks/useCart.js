import { useEffect, useState } from "react";


const useCart = () => {
    const [selectedFood, setSelectedFood] = useState([]);

    useEffect(() => {
        const cart = getCart();
        setSelectedFood(cart);
    }, [])

    function getCart() {
        let cart;
        const isHave = localStorage.getItem('cart')
        if (isHave) {
            cart = JSON.parse(isHave);
        } else {
            cart = []
        }
        return cart;
    }

    function addToCart(matchingFood) {
        const isHave = selectedFood.find((selected) => selected.id === matchingFood.id);
        if (isHave) {
            alert('Dishes has been added')
        } else {
            const newSelection = [...selectedFood, matchingFood];
            localStorage.setItem('cart', JSON.stringify(newSelection));
            setSelectedFood(newSelection);
        }
    }



    function remove(id) {
        const foodAfterRemove = selectedFood.filter((food) => food.id != id);
        localStorage.setItem('cart', JSON.stringify(foodAfterRemove));
        setSelectedFood(foodAfterRemove);
    }
    return { addToCart, selectedFood, remove }
};

export default useCart;