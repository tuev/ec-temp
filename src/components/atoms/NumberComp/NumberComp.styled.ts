import { space } from 'styled-system'
import { switchProp } from 'styled-tools'
import { COLOR } from 'theme/colors'
import styled, { css } from 'styled-components'

export const AppNumberComp: React.FC = styled.button<{
  color?: 'primary' | 'white'
}>`
  ${space}
  width: 27px;
  height: 27px;
  border: 1px solid ${COLOR.primary};
  border-radius: 50%;
  font-size: 14px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline-color: transparent;
  outline-style: none;
  cursor: pointer;

  ${switchProp(
    'color',
    {
      primary: css`
        background-color: ${COLOR.primary};
        color: ${COLOR.white};
      `,
      white: css`
        background-color: ${COLOR.white};
        color: ${COLOR.primary};
      `,
    },
    css`
      background-color: ${COLOR.primary};
      color: ${COLOR.white};
    `
  )}
`
