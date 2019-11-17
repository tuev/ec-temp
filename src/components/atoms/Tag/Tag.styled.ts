import { COLOR } from 'theme/colors'
import styled from 'styled-components'
import { prop } from 'styled-tools'

import { space } from 'styled-system'
export const AppTag: React.FC<{ color?: string }> = styled.div<{
  color?: string
}>`
  ${space}
  background-color: ${prop('color', COLOR.primary)};
  color: ${COLOR.white};
  font-size: 18px;
  text-align: center;
  min-width: 60px;
  height: 30px;
  display: inline-block;
  line-height: 30px;
  padding: 0 8px;
  margin: 0 8px;
`
