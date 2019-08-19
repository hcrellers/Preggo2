import React, { useEffect, useState } from "react";
import Nutrition from "./nutrition";

const CreateFoodLog = () => {
    const APP_ID = "799dea75";
    const APP_KEY = "e806ed0b36e74af63bf3578a2565f6ef";

    const [nutrition, setNutrition] = useState([]);
  

    useEffect( () => {
        getNutrition();
    }, []);

    const getNutrition = async () => {
        const response = await fetch(`https://api.edamam.com/api/food-database/parser?nutrition-type=logging&ingr=red%20apple&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json();
        console.log(data.hints[0].food.nutrients);
        setNutrition(data.hints[0].food.nutrients);
    };

    return (
        <div className="CreateFoodLog">
            <form className="search-form">
                <input className="search-bar" type="text" />
                <button className="search-button" type="submit">
                    Search
                 </button>

            </form>
      {/* {nutrition.map(nutrients =>(  */}
                <Nutrition />
            {/* // ))}  */}
        </div>
    );
};


export default CreateFoodLog;