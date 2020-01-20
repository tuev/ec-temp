import React from 'react'
import { mount } from 'enzyme'
import { render, fireEvent } from '@testing-library/react'

import ViewMode from '..'

describe('Viewmode', () => {
  it('view mode grid', () => {
    const appViewMode = mount(<ViewMode type="grid" />)
    expect(appViewMode).toMatchSnapshot()
  })

  it('view mode list', () => {
    const appViewMode = mount(<ViewMode type="list" />)
    expect(appViewMode).toMatchSnapshot()
  })

  it('view mode grid checked', () => {
    const appViewMode = mount(<ViewMode type="grid" />)
    expect(appViewMode).toMatchSnapshot()
  })

  it('view mode list checked', () => {
    const initMode = 'list'
    let viewModeValue = initMode

    const viewmodeHandleChange = jest
      .fn()
      .mockImplementation(value => (viewModeValue = value))
    const appViewMode = render(
      <ViewMode type="list" onViewModeChange={viewmodeHandleChange} />
    )
    expect(appViewMode).toMatchSnapshot()

    const gridBtn = appViewMode.getByTestId('viewmode-grid')
    const listBtn = appViewMode.getByTestId('viewmode-list')

    fireEvent.click(gridBtn)
    expect(viewModeValue).toEqual('grid')

    fireEvent.click(listBtn)
    expect(viewModeValue).toEqual('list')

    fireEvent.click(gridBtn)
    expect(viewModeValue).toEqual('grid')

    expect(viewmodeHandleChange).toBeCalledTimes(4)
  })
})
