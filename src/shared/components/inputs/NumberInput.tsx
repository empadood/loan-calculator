import React from 'react'
import './Inputs.css'
import './numberInput.css'
import { Text } from '../typography/Text'

interface NumberInputProps {
  value: number
  label: string
  size?: 'small' | 'medium' | 'large' | 'max'
  name: string
  inputType?: 'default' | 'range'
  min?: number
  max?: number
  step?: number
  onChange: (value: number) => void
}

export const NumberInputComponent = ({
  value,
  size,
  label,
  name,
  inputType,
  min,
  max,
  step,
  onChange
}: NumberInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(+event.target.value || 0)
  }

  return (
    <div className="number-field__container">
      <label htmlFor={name}>
        <Text text={label} size="small" />
      </label>
      <input
        step={step}
        min={min}
        max={max}
        type={inputType ?? 'default'}
        className={`input-field input-field--${size ?? 'large'}`}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
