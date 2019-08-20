import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button'
import './guidelines.css'

export default class Guidelines extends Component {
    constructor(props) {
        super(props);

        this.weightChanged = this.weightChanged.bind(this);
        this.heightChanged = this.heightChanged.bind(this);

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
            <div>
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
                    <h3>BMI = {this.getBmi}</h3>
                </div>
                {/* <div className="row">
                    <h3>{this.computeBmi}</h3>
                </div> */}
            </div>
        )
    }
}
