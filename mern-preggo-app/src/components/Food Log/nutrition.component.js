import React from "react";
import './create-foodlog.css'
import axios from 'axios';

const NutritionInfo = ({title,calories,carbs,protein,fiber,fat}) => {

        // const  updateLog = e => {
        //     e.preventDefault();
        
        //     axios.post('http://localhost:3000/', NutritionInfo)
        //       .then(res => console.log(res.data));
        // console.log(NutritionInfo)
        //     window.location = '/';

        //   };

    return(
      
        <div className="indiResults">
            {/* <h1>Nutrition Information</h1> */}
            <h6>{title}</h6>
            <p>Calories: {calories}</p>
            <p>Carbs: {carbs}</p>
            <p>Protein: {protein}</p>
            <p>Fiber: {fiber}</p>
            <p>Fat: {fat}</p>
            <button className="AddLog"> +
             </button>
        </div>
        
    );
};


export default NutritionInfo;

