import React from 'react'

function BMISelector(props) {
  return (
    <>
      <div>
        <select className="method-selector" name="method" id="method" onChange={props.onChangeValue} value={props.method}>
          <option value="metric">Metric</option>
          <option value="imperial" name="imperial">Imperial</option>
        </select>
      </div>
    </>
  )
}

export default BMISelector