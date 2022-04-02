import { useEffect, useState } from "react";


const useFoods = () => {
    const [foods, setFoods] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0)
    const size = 9;
    useEffect(() => {
        fetch(`http://localhost:5000/foods?size=${size}&&page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data.foods)
                const totalData = data.count;
                const pages = Math.ceil(totalData / size);
                setTotalPages(pages)
            });
    }, [currentPage])
    return {
        foods,
        setFoods,
        totalPages,
        currentPage,
        setCurrentPage
    };

};

export default useFoods;