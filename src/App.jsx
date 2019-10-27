import './App.css';
import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import BMISelector from './Components/BMISelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }

  methodChange = e => {
    this.setState({ method: e.target.value })
  }

  inputChangeHandler(e) {
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
          <label>Weight(kg)</label>
          <input name="weight" onChange= { (e) => this.inputChangeHandler(e) } />
        </div>

        <div>
          <label>Height(cm)</label>
          <input name="height" onChange= { (e) => this.inputChangeHandler(e) }/>
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
