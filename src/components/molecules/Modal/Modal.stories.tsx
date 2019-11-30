import React, { useState } from 'react'
import Modal from './Modal'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'

export default {
  component: Modal,
  title: 'AppModal',
  includeStories: ['basic'],
}

function BasicModal() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Button
        color="primary"
        variant="contained"
        size="small"
        onClick={() => setOpenModal(true)}
      >
        open modal
      </Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <>
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
        </>
      </Modal>
    </>
  )
}

export const basic = () => {
  return <BasicModal />
}
