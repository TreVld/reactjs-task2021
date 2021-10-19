import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Footer from '../Footer'

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('Footer tests', () => {
  it('render with name', () => {
    act(() => {
      render(<Footer name="Netflix"/>, container)
    })

    expect(container.textContent).toBe('Netflix')
  })
})
