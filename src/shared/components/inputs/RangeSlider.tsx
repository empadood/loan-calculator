import { useRef, useState } from 'react'
import { useRanger, Ranger } from '@tanstack/react-ranger'
import { Text } from '../typography/Text'
import styled from 'styled-components'
import { css } from 'styled-components'
import { theme } from 'src/shared/styles/theme'

import './Inputs.css'
import './RangeSlider.css'

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

export const Track = styled('div')`
  height: 8px;
  width: 90%;
  position: relative;
  userselect: none;
  height: 4px;
  width: 100%;
  background: #ddd;
  boxshadow: inset 0 1px 2px rgba(0, 0, 0, 0.6);
  borderradius: 2px;
`

export const Segment = styled('div')<{
  index: number
  left: number
  width: number
}>`
  position: absolute;
  background: ${(props) => css`
    ${props.index === 0 ? theme.secondaryColor : theme.white};
  `};
  left: ${(props) => `${props.left}%`};
  height: 100%;
  border: 1px solid grey;
  height: 16px;
  top: -4px;
  border-radius: 12px;
  width: ${(props) => `${props.width}%`};
`
export const Handle = styled('button')<{
  left: number
}>`
  position: absolute;
  left: ${(props) => css`
    ${props.left}%
  `};
  zIndex: isActive ? 1 : 0;
  appearance: none;
  border: none;
  outline: none;
  background: ${theme.secondaryColor};
  outline: 2px solid white;
  display: flex;
  top: -10px;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  font-size: 0.7rem;
  white-space: nowrap;
  color: white;  
  transform: (props: { active: boolean }) =>
    props.active
      ? 'translate(-50%, -100%) scale(1.3)'
      : 'translate(-50%, -50%) scale(0.9)';
`

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
    value > 1000 ? '-10ch' : '-8ch'

  return (
    <div className="range-slider__container">
      <label htmlFor={name}>
        <Text text={label} size="small" />
      </label>
      <Track
        ref={rangerRef}
        className={`input-field input-field--${size ?? 'large'}`}
        style={{
          position: 'relative',
          userSelect: 'none',
          height: '4px',
          background: '#ddd',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,.6)',
          borderRadius: '2px'
        }}
      >
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
                    top: '8px'
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
