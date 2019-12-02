import React, { FC } from 'react'
import { AppModal, AppModalContent } from './Modal.styled'
import { BaseModalProps } from './Modal.types'

// TODO: Need to have customHook that receive children, modalProps and return open/close method of this modal
const Modal: FC<BaseModalProps> = (props: BaseModalProps) => {
  const { children, ...modalProps } = props
  return (
    <AppModal {...modalProps}>
      <AppModalContent>{children}</AppModalContent>
    </AppModal>
  )
}

export default Modal
