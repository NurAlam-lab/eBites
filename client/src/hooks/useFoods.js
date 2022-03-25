import { useEffect, useState } from "react";


const useFoods = () => {
    const [foods, setFoods] = useState([]);
    //const [totalFood, setTotalFood] = useFoods(0);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data.foods)
                // setTotalFood(data.count)
            });
    }, [])
    return {
        foods,
        setFoods
    };

};

export default useFoods;