import { useRef, useState } from 'react'
import { useRanger, Ranger } from '@tanstack/react-ranger'
import { Text } from '../typography/Text'

import './Inputs.css'
import './RangeSlider.css'
import { Track, Segment, Handle } from './RangerSliderElements'

interface RangeSliderProps {
  value: number
  label: string
  size?: 'small' | 'medium' | 'large' | 'max'
  name: string
  min?: number
  max?: number
  step?: number
  maxSuffix?: string
  onChange: (value: number) => void
  valueFormatter?: (value: number) => string
}

export const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  name,
  label,
  size,
  maxSuffix = '',
  onChange,
  valueFormatter
}: RangeSliderProps) => {
  const rangerRef = useRef<HTMLDivElement>(null)
  const [values, setValues] = useState<ReadonlyArray<number>>([10])
  const rangerInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => rangerRef.current,
    values,
    min: min,
    max: max,
    stepSize: step,
    onChange: (instance: Ranger<HTMLDivElement>) => {
      setValues(instance.sortedValues)
      onChange(instance.sortedValues[0])
    }
  })

  const getOffsetDueToLengthOfValue = (value: number) =>
    value > 1000 ? '-10ch' : '-6ch'

  return (
    <div className="range-slider__container">
      <label htmlFor={name}>
        <Text text={label} size="small" />
      </label>
      <Track
        ref={rangerRef}
        className={`input-field input-field--${size ?? 'large'}`}
      >
        <div
          className="range-slider-max-value"
          style={{
            visibility: values[0] >= 0.8 * max ? 'hidden' : 'visible'
          }}
        >
          {valueFormatter && max ? (
            valueFormatter(max)
          ) : (
            <>{`${max} ${maxSuffix}`}</>
          )}
        </div>
        {rangerInstance.getSteps().map(({ left, width }, i) => (
          <Segment key={i} index={i} left={left} width={width} />
        ))}
        {rangerInstance
          .handles()
          .map(
            (
              { value, onKeyDownHandler, onMouseDownHandler, onTouchStart },
              i
            ) => (
              <Handle
                key={i}
                onKeyDown={onKeyDownHandler}
                onMouseDown={onMouseDownHandler}
                onTouchStart={onTouchStart}
                role="slider"
                aria-valuemin={rangerInstance.options.min}
                aria-valuemax={rangerInstance.options.max}
                aria-valuenow={value}
                left={rangerInstance.getPercentageForValue(value)}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: getOffsetDueToLengthOfValue(value),
                    top: '12px'
                  }}
                >
                  {valueFormatter ? (
                    valueFormatter(value)
                  ) : (
                    <>{`${value} ${maxSuffix}`}</>
                  )}
                </span>
              </Handle>
            )
          )}
      </Track>
    </div>
  )
}
