import React, { Component } from 'react';
import './guidelines.css'
import { Container, Row, Col } from "../Grid/grid";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from '../Cards/cardOne'

export default class Guidelines extends Component {

    render() {
        return (


            <Container>
                <Row>
                    <Card />
                </Row>
                <Row>
                    <Col size="sm-6">
                        <div>
                            <h3>Physical Activity</h3>
                            <p>Staying active during pregnancy is important to maintain weight and help maintain strength for labor.</p>
                            <p>2 hours a week are recommended or 30 mintues every day. Walking, swimming, and yoga are great for pregnancy.</p>
                            <p>Defintely talk with your doctor before commiting to any routine to see what is best for your needs and abilities.</p>
                        </div>
                        <div>
                            <h3>BMI Calculator</h3>
                            <p>To check your BMI go to the link listed below.</p>
                            <a href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/english_bmi_calculator/bmi_calculator.html" target="_blank">Visit CDC.Gov</a>
                           <p></p>
                            <p>Healthy pregnancy weight gain for your BMI is listed below:</p>
                            <ul className="a">
                                <li>Normal weight: 37 to 54 pounds</li>
                                <li>Overweight: 31 to 50 pounds</li>
                                <li>Obese: 25 to 42 pounds</li>
                            </ul>
                        </div>

                    </Col>

                    <Col size="sm-6">
                        <div>
                            <h3>Calories</h3>
                            <p>Figure out how many calories you're supposed to intake regularly based on your age, weight, and activty level below</p>
                            <a href="https://health.gov/dietaryguidelines/2015/guidelines/appendix-2/" target="_blank">Visit Health.Gov</a>
                            <p></p>
                            <p>Below is how many extra calories you will add during each trimester of your pregnancy.</p>
                            <ul className="a">
                                <li>First trimester: Does NOT require extra calories</li>
                                <li>Second trimester: add 340 calories a day to your regular intake.</li>
                                <li>Third trimester: add 450 calories a day to your regular intake.</li>
                            </ul>
                        </div>
                    </Col>

                </Row>
            </Container>
        )
    }
}
