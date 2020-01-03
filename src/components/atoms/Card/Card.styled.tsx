/**
 *
 * Styled for Card
 *
 */

import styled from 'styled-components'

export const CardWrapper = styled.div`
  cursor: pointer;
  will-change: transform, opacity;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
  min-height: 335px;
  padding: 8px;

  &:hover {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.3);
  }
`
