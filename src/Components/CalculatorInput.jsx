import React from 'react'

function CalculatorInput(props) {
  return (
    <div>
      <div>
        <label>Weight(kg)</label>
        <input name="weight" onChange= { props.inputChangeHandler } />
      </div>

      <div>
        <label>Height(cm)</label>
        <input name="height" onChange= { props.inputChangeHandler }/>
      </div>
    </div>
  )
}

export default CalculatorInput
