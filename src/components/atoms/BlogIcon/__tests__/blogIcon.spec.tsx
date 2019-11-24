import React from 'react'
import { mount } from 'enzyme'
import BlogIcon from '..'

describe('BlogIcon', () => {
  it('like icon', () => {
    const likeIcon = mount(<BlogIcon icon="like" count={20} />)

    expect(likeIcon).toMatchSnapshot()
    const expectStyle: { [key: string]: string } = {
      'align-items': 'center',
      cursor: 'pointer',
      display: 'flex',
      'justify-content': 'space-around',
      'max-width': '80px',
    }

    for (const key in expectStyle) {
      if (expectStyle[key]) {
        expect(likeIcon).toHaveStyleRule(key, expectStyle[key])
      }
    }
  })

  it('comment icon', () => {
    const commentIcon = mount(<BlogIcon icon="comment" count={20} />)
    expect(commentIcon).toMatchSnapshot()

    const expectStyle: { [key: string]: string } = {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-around',
      'max-width': '80px',
      cursor: 'pointer',
    }

    for (const key in expectStyle) {
      if (expectStyle[key]) {
        expect(commentIcon).toHaveStyleRule(key, expectStyle[key])
      }
    }
  })

  it('bookmark icon', () => {
    const bookmarkIcon = mount(<BlogIcon icon="bookmark" />)
    expect(bookmarkIcon).toMatchSnapshot()

    const expectStyle: { [key: string]: string } = {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-around',
      'max-width': '80px',
      cursor: 'pointer',
    }

    for (const key in expectStyle) {
      if (expectStyle[key]) {
        expect(bookmarkIcon).toHaveStyleRule(key, expectStyle[key])
      }
    }
  })

  it('options icon', () => {
    const optionsIcon = mount(<BlogIcon icon="options" />)
    expect(optionsIcon).toMatchSnapshot()
    const expectStyle: { [key: string]: string } = {
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'space-around',
      'max-width': '80px',
      cursor: 'pointer',
    }

    for (const key in expectStyle) {
      if (expectStyle[key]) {
        expect(optionsIcon).toHaveStyleRule(key, expectStyle[key])
      }
    }
  })
})
