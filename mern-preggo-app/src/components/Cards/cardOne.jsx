import React from 'react';
import img1 from '../../images/pine.jpg'
import './cards.css'

const Card = props => {

    return (
        <div className="card text-center">
            <div className="overflow">
                <img className="img1" src={img1} alt="Image 1" />
            </div>
            

        </div>
    );

};

export default Card