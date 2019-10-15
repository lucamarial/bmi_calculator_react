import './App.css';
import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric'
    }
  }

  render () {
    return (
      <div className="App">
        <h1>BMI Converter</h1>
        <div>
          <label>Weight(kg)</label>
          <input name="weight" value= { this.state.weight } onChange= { (e) => this.setState({ weight: e.target.value })} />
        </div>

        <div>
          <label>Height(cm)</label>
          <input name="height" value= { this.state.height } onChange= { (e) => this.setState({ height: e.target.value })}/>
        </div>

        <div className="form-group row">
            <div className="col-auto">
                <select className="form-control" id="method">
                    <option name="metric" value={ this.state.method } onChange= { (e) => this.setState({ method: e.target.value })}>metric</option>
                    <option name="imperial" value={ this.state.method } onChange= { (e) => this.setState({ method: e.target.value })}>imperial</option>
                </select>
            </div>
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
