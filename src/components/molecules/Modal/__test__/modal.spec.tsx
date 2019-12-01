import React from 'react'
import { mount } from 'enzyme'
import Modal from '..'

// refer test modal
// link: https://medium.com/front-end-weekly/tested-react-build-and-test-modal-using-react-features-and-dom-events-39b7246a3a6f

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

    const isOpen = wrapper.find(Modal).props().open
    expect(isOpen).toEqual(true)

    const title = wrapper.find('.title').text()
    expect(title).toEqual('Modal Title')
  })
})
