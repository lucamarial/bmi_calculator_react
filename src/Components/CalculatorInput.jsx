import React from 'react'

function CalculatorInput(props) {
  let renderForm; 
  if (props.method === 'metric') {
    renderForm = (
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
  } else {
    renderForm = (
      <div>
        <div>
          <label>Weight(lbs)</label>
          <input name="weight" onChange= { props.inputChangeHandler } />
        </div>

        <div>
          <label>Height(in)</label>
          <input name="height" onChange= { props.inputChangeHandler }/>
        </div>
      </div>
    )
  }

  return (
    <>
      {renderForm}
    </>
  )
}

export default CalculatorInput
