import React from 'react'
import { Select } from 'semantic-ui-react'

const BMIConverter = [
  { key: 'method', value: 'metric', text: 'Metric' },
  { key: 'method', value: 'imperial', text: 'Imperial' },
]

const BMISelector = () => (
  <Select placeholder='BMI Converter' options={BMIConverter} />
)

export default BMISelector