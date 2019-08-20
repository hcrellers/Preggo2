import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button'
import './guidelines.css'
import { Container, Row, Col } from "../Grid/grid";

export default class Guidelines extends Component {
    constructor(props) {
        super(props);

        this.weightChanged = this.weightChanged.bind(this);
        this.heightChanged = this.heightChanged.bind(this);
        this.getBMI = this.getBmi.bind(this);
        this.computeBmi = this.computeBmi.bind(this);
    }

    weightChanged(weightValue) {
        this.setState({ weight: weightValue });
    }

    heightChanged(heightValue) {
        this.setState({ height: heightValue });
    }

    computeBmi() {
        let bmiValue = (this.state.weight / this.state.height) / this.state.height;
        this.setState({ bmi: bmiValue });
        let bmiClass = this.getBmi(bmiValue);
        this.setState({ bmiClass: bmiClass });
    }

    getBmi(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        }
        if (bmi >= 18.5 && bmi < 24.9) {
            return "Normal weight";
        }
        if (bmi >= 25 && bmi < 29.9) {
            return "Overweight";
        }
        if (bmi >= 30) {
            return "Obesity";
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="sm-6">
                    <div className="guidelines">
                            <h3>Physical Activity</h3>
                       <p>Staying active during pregnancy is an important tool to maintain weight and help maintain strength for labor</p>
                        <p>2 hours a week are recommended or 30 mintues every day. Walking, swimming, and yoga are great for pregnancy.</p>
                        <p>Defintely talk with your doctor before commiting to any routine to see what is best for your needs and abilities.</p>
                        </div>
                        <div>
                            <h3>BMI Calculator</h3>
                            <div className="row">
                                <TextInput label="Height" placeholder="Enter height in inches" onChange={this.heightChanged} />
                            </div>
                            <div className="row">
                                <TextInput label="Weight" placeholder="Enter weight in pounds" onChange={this.weightChanged} />
                            </div>
                            <div className="row">
                                <Button label="SUBMIT" onClick={this.computeBmi} />
                            </div>
                            <div className="row">
                                <p></p>
                                <h5>BMI = {this.bmi}</h5>
                            </div>
                            <div className="row">
                                <h4>{this.bmiClass}</h4>
                            </div>
                        </div>
                        
                    </Col>

                    <Col size="sm-6">
                        <div className="guidelines">
                            <h3>Guidelines</h3>
                            <p>Guidelines on gaining weight during pregnancy are based on the woman's BMI before pregnancy.</p>
                            <ul className="a">
                                <li>Underweight: BMI below 18.5</li>
                                <li>Normal weight: BMI to 24.9</li>
                                <li>Overweight: 25.0 to 29.9</li>
                                <li>Obese: 30.0 and above</li>
                            </ul>
                            <p>Healthy weight gain for full-term pregnancy are:</p>
                            <ul className="a">
                                <li>Normal weight: 37 to 54 pounds</li>
                                <li>Overweight: 31 to 50 pounds</li>
                                <li>Obese: 25 to 42 pounds</li>
                            </ul>
                            <p>Figure out how many calories you're supposed to intake based on your age, weight, and activty level below</p>
                            <a href="https://health.gov/dietaryguidelines/2015/guidelines/appendix-2/" target="_blank">Visit Health.Gov</a>
                           <p></p>
                            <p>Then below is an overview of how your calorie intake will change through the months of your pregnancy.</p>
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
