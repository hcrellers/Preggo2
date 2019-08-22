import React from 'react';
import img2 from '../../images/food.jpg'
import './cards.css'

const CardTwo = props => {

    return (
        <div className="card text-center">
            <div className="overflow">
                <img className="img2" src={img2} alt="Image 2" />
            </div>
            

        </div>
    );

};

export default CardTwo