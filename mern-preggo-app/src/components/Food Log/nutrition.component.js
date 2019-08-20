import React from "react";
import './create-foodlog.css'
import axios from 'axios';

const NutritionInfo = ({title,calories,carbs,protein,fiber,fat}) => {

        const  updateLog = e => {
            e.preventDefault();
        
            axios.post('http://localhost:3000/', NutritionInfo)
              .then(res => console.log(res.data));
        console.log(NutritionInfo)
            window.location = '/';

          };

    return(
      
        <div className="indiResults">
          <form onSubmit={updateLog} className="submit-form">
            {/* <h1>Nutrition Information</h1> */}
            <h3>{title}</h3>
            <p>Calories: {calories}</p>
            <p>Carbs: {carbs}</p>
            <p>Protien: {protein}</p>
            <p>Fiber: {fiber}</p>
            <p>Fat: {fat}</p>
            <button className="AddLog"> +
             </button>
             </form>
        </div>
    );
};


export default NutritionInfo;

