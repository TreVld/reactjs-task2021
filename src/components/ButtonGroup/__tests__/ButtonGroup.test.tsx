import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'
import ButtonGroup from '../ButtonGroup'

let container: HTMLDivElement | null = null

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('render ButtonGroup', () => {
  it('should render the content', () => {
    act(() => {
      render(
        <ButtonGroup />,
        container
      )
    })

    expect(pretty(container.innerHTML)).toMatchSnapshot()
  })
})
