import { space } from 'styled-system'
import { Modal } from '@material-ui/core'
import styled from 'styled-components'
import { COLOR } from 'theme/colors'
import { BaseModalProps } from './Modal.types'

export const AppModal: React.FC<BaseModalProps> = styled(Modal)<BaseModalProps>`
  ${space}
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AppModalContent: React.FC = styled.div`
  ${space}
  outline: none !important;
  background-color: ${COLOR.white};
  border: 2px solid ${COLOR.black};
  width: 80%;
  max-height: 100%;
  overflow-y: auto;
`
