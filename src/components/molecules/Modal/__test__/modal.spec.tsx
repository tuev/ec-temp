import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Modal from '..'

// refer test modal
// link: https://medium.com/front-end-weekly/tested-react-build-and-test-modal-using-react-features-and-dom-events-39b7246a3a6f

function WithModal() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <Modal onClose={() => setOpenModal(false)} open={openModal}>
      <div>
        Hello World
        </div>
    </Modal>
  )
}

describe('Modal', () => {
  it('renders modal when open flag is true', () => {
    const props = { open: true }
    const wrapper = mount(
      <div id="root">
        <Modal {...props}>
          <div className="title">Modal Title</div>
        </Modal>
      </div>
    )

    expect(wrapper).toMatchSnapshot()

    const isOpen = wrapper.find(Modal).props().open
    expect(isOpen).toEqual(true)

    const title = wrapper.find('.title').text()
    expect(title).toEqual('Modal Title')
  })

  it('closes the Modal when ESC key is pressed', () => {
    const wrapper = mount(<WithModal />);
    const evt = new KeyboardEvent('keydown', { keyCode: 27 } as any)
    document.dispatchEvent(evt)
    expect(wrapper.find(Modal).props().open).toEqual(false)
  });
})
