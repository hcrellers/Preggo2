import React, { useEffect, useState } from "react";
import Nutrition from "./nutrition.component";
import './create-foodlog.css'
import { Container, Row, Col } from "../Grid/grid";
import CardTwo from '../Cards/cardTwo';
import Log from "../Log/log";
import LogItem from "../Log/logItem";
import DeleteBtn from "../DeleteBtn/DeleteBtn";



const CreateFoodLog = () => {
    const APP_ID = "799dea75";
    const APP_KEY = "e806ed0b36e74af63bf3578a2565f6ef";

    const [nutrition, setNutrition] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState(' ');

    useEffect(() => {
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
        <Container>
            <Row>
                <CardTwo />
            </Row>
            <Row>
                <Col size="sm-5">
                    <div className="CreateFoodLog">
                        <form onSubmit={getSearch} className="search-form">
                            <input className="search-bar" type="text" placeholder="What did you eat today..." value={search} onChange={updateSearch} />
                            <button className="search-button" type="submit">
                                Search
                             </button>

                        </form>

                        <div>

                            {nutrition.map(nutrients => (
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
                    </div>
                </Col>



                <Col size="sm-5">
                    <div id="white">
                        <h3>Food Log</h3>
                        {nutrition.length ? (
                            <Log>
                                {nutrition.map(nutrients => (
                                    <LogItem key={nutrients._id}>
                                            <strong>
                                                {nutrients.food.label} Calories {nutrients.food.nutrients.ENERC_KCAL}
                                            </strong>
                                    
                                        <DeleteBtn />
                                    </LogItem>
                                ))}
                            </Log>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}

                    </div>
                </Col>

            </Row >
        </Container >
    );
};


export default CreateFoodLog;