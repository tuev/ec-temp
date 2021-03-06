import React, { useState, useCallback } from 'react'
import Modal from './Modal'
import Button from 'components/atoms/Button'
import Typography from 'components/atoms/Typography'
import Wrapper from 'components/atoms/Wrapper'

export default {
  component: Modal,
  title: 'AppModal',
  includeStories: ['basic'],
}

const BasicModal = () => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpen = useCallback(() => setOpenModal(true), [])
  const handleClose = useCallback(() => setOpenModal(false), [])

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        size="small"
        onClick={handleOpen}
      >
        open modal
      </Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        onBackdropClick={handleClose}
      >
        <Wrapper p="2rem">
          <Typography customvariant="header3">My Title</Typography>
          <Typography customvariant="body2">
            My Description Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Cum eaque soluta illo deleniti unde, cumque sit mollitia,
            incidunt et recusandae, ea odit pariatur officia aliquam minus nulla
            laborum! Laborum, dignissimos! My Description Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Cum eaque soluta illo deleniti
            unde, cumque sit mollitia, incidunt et recusandae, ea odit pariatur
            officia aliquam minus nulla laborum! Laborum, dignissimos!
          </Typography>
        </Wrapper>
      </Modal>
    </>
  )
}

export const basic = () => {
  return <BasicModal />
}
