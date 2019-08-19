import React from "react";

const Nutrition = ({calories,carbs}) => {
    return(
        <div>
            <h1>Nutrition Information</h1>
            <p>{calories}</p>
            <p>{carbs}</p>
            <p>Protein</p>
            <p>Fiber</p>
            <p>Fat</p>
        </div>
    );
};

export default Nutrition;