import { COLOR } from 'theme/colors'
import styled from 'styled-components'

export const AppBlogIconWrapper: React.FC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 80px;
  cursor: pointer;
`

export const AppBlogIconCircle: React.FC = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${COLOR.gray2};
  display: flex;
  align-items: center;
  justify-content: center;
`
