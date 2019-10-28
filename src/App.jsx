import './App.css';
import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import BMISelector from './Components/BMISelector';
import CalculatorInput from './Components/CalculatorInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }

  methodChange = (e) => {
    this.setState({ method: e.target.value })
  }

  inputChangeHandler (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className="App">
        <h1>BMI Converter</h1>
        <div>
          <BMISelector
            method={this.state.method}
            onChangeValue={this.methodChange}
          />
        </div>

        <div>
          <CalculatorInput 
            method={this.state.method}
            inputChangeHandler={this.inputChangeHandler.bind(this)}
          />
        </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          method={this.state.method}
        />
      </div>
    );
  }
}

export default App;
