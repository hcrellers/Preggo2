import React from "react";

const NutritionInfo = ({title,calories,carbs,protein,fiber,fat}) => {
    return(
        <div>
            {/* <h1>Nutrition Information</h1> */}
            <h3>{title}</h3>
            <p>{calories}</p>
            <p>{carbs}</p>
            <p>{protein}</p>
            <p>{fiber}</p>
            <p>{fat}</p>
        </div>
    );
};

export default NutritionInfo;