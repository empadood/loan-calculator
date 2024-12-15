import { theme } from 'src/shared/styles/theme'
import styled, { css } from 'styled-components'

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
  height: 26px;
  top: -8px;
  border-radius: 16px;
  width: ${(props) => {
    // will extend the first segment to the right to make it look a little better
    return props.index === 0 ? `${props.width + 5}%` : `${props.width}%`
  }};
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
  
  background: ${theme.secondaryColor};
  border: 2px solid white;
  display: flex;
  top: -14px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  font-size: 0.7rem;
  white-space: nowrap;
  color: white;  
  transform: (props: { active: boolean }) =>
    props.active
      ? 'translate(-50%, -100%) scale(1.3)'
      : 'translate(-50%, -50%) scale(0.9)';
`
