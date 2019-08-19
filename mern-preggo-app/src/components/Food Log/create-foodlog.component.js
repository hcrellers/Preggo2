import React, { useEffect, useState } from "react";
import Nutrition from "./nutrition";

const CreateFoodLog = () => {
    const APP_ID = "799dea75";
    const APP_KEY = "e806ed0b36e74af63bf3578a2565f6ef";

    const [nutrition, setNutrition] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken')

    useEffect( () => {
        getNutrition();
    }, [query]);

    const getNutrition = async () => {
        const response = await fetch(`https://api.edamam.com/api/food-database/parser?nutrition-type=logging&ingr=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        console.log(data.hints);
        setNutrition(data.hints);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
        // console.log(search);
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("")
    }

    return (
        <div className="CreateFoodLog">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">
                    Search
                 </button>

            </form>
      {nutrition.map(nutrients =>( 
                <Nutrition 
                key={nutrients.food.label}
                title={nutrients.food.label} 
                calories={nutrients.food.nutrients.ENERC_KCAL}
                protien={nutrients.food.nutrients.PROCNT}
                fiber={nutrients.food.nutrients.FIBTG}
                fat={nutrients.food.nutrients.FAT}
                
                />
              ))} 
        </div>
    );
};


export default CreateFoodLog;