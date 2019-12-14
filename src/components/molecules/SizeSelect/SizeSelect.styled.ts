import styled from 'styled-components'

export const SizeSelectWrapper = styled.div``

export const SizeItemWrapper = styled.div`
  margin: 0 4px;
  display: inline-block;

  button {
    border-radius: 4px;
    min-height: 28px !important;
    min-width: 55px !important;
    line-height: 20px;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`
