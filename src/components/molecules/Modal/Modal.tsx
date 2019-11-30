import React, { FC } from 'react'
import { AppModal, AppModalContent } from './Modal.styled'
import { BaseModalProps } from './Modal.types'

const Modal: FC<BaseModalProps> = (props: BaseModalProps) => {
  const { children, ...modalProps } = props
  return (
    <AppModal {...modalProps}>
      <AppModalContent>{children}</AppModalContent>
    </AppModal>
  )
}

export default Modal
