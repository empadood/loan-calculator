import React, { useEffect, useRef, useState } from 'react'
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
  maxSuffix?: string
  onChange: (value: number) => void
  valueFormatter?: (value: number) => string
}

export const NumberInputComponent = ({
  value,
  size,
  label,
  name,
  inputType,
  min,
  max,
  maxSuffix,
  step,
  valueFormatter,
  onChange
}: NumberInputProps) => {
  const [thumbValue, setThumbValue] = useState(value)
  const rangeRef = useRef<HTMLInputElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)
  const maxValueRef = useRef<HTMLDivElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = +event.target.value || 0
    onChange(newValue)
    setThumbValue(newValue)
  }

  const repositionElementsOnChange = (thumbValue: number) => {
    if (rangeRef.current && thumbRef.current) {
      const rangeWidth = rangeRef.current.offsetWidth
      const thumbWidth = thumbRef.current.offsetWidth
      const max = rangeRef.current.max ? parseInt(rangeRef.current.max) : 100
      const min = rangeRef.current.min ? parseInt(rangeRef.current.min) : 0
      const left =
        ((thumbValue - min) / (max - min)) * (rangeWidth - thumbWidth)
      thumbRef.current.style.left = `${left}px`

      // Hide max value text if thumb is close to it
      if (!maxValueRef.current) return
      const maxValueLeft = rangeWidth - maxValueRef.current.offsetWidth
      if (left + thumbWidth >= maxValueLeft) {
        maxValueRef.current.style.opacity = '0'
      } else {
        maxValueRef.current.style.opacity = '1'
      }

      // Switch sides of the thumb value if the value is low
      const translateXValue = thumbValue < 0.15 * max ? 30 : 40
      const rightSideOffset = 10
      if (thumbValue < 0.3 * max) {
        thumbRef.current.style.transform = `translateX(${translateXValue + rightSideOffset}px)` // Move to the right
        thumbRef.current.style.color = 'gray'
      } else {
        thumbRef.current.style.transform = `translateX(${-translateXValue}px)` // Move to the left
        thumbRef.current.style.color = 'white'
      }
    }
  }

  useEffect(() => {
    repositionElementsOnChange(thumbValue)
  }, [thumbValue])

  return (
    <div className="number-field__container">
      <label htmlFor={name}>
        <Text text={label} size="small" />
      </label>
      <div className="range-input__wrapper">
        <input
          ref={rangeRef}
          step={step}
          min={min}
          max={max}
          type={inputType ?? 'default'}
          className={`input-field input-field--${size ?? 'large'}`}
          name={name}
          value={value}
          onChange={handleChange}
        />
        {inputType === 'range' && (
          <>
            <div ref={thumbRef} className="range-thumb-value">
              {valueFormatter ? (
                valueFormatter(thumbValue)
              ) : (
                <>{`${thumbValue} ${maxSuffix}`}</>
              )}
            </div>
            <div ref={maxValueRef} className="range-max-value">
              {valueFormatter && max ? (
                valueFormatter(max)
              ) : (
                <>{`${max} ${maxSuffix}`}</>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
