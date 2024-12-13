import React from 'react'
import './Inputs.css'
import './numberInput.css'
import { Text } from '../typography/Text'

interface NumberInputProps {
  value: number
  label: string
  debounceDelay?: number
  placeholder?: string
  size?: 'small' | 'medium' | 'large'
  name: string
  searchOptions?: string[]
  onChange: (value: number) => void
}

export const NumberInputComponent = ({
  value,
  placeholder,
  size,
  label,
  name,
  onChange
}: NumberInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(+event.target.value || 0)
  }

  return (
    <div className="number-field__container">
      <label htmlFor={name}>
        <Text text={label} size="medium" />
      </label>
      <input
        className={`input-field input-field--${size ?? 'large'}`}
        type="search"
        list="pokemon-list"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}
