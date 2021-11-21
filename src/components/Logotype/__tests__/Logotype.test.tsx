import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import Logotype from '../Logotype'

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

it('render Logotype', () => {
  act(() => {
    render(
      <BrowserRouter>
        <Logotype />
      </BrowserRouter>,
      container
    )
  })

  expect(container.textContent).toBe('netflixroulette')
  expect((container.firstChild as HTMLElement).className).toBe('logotype')
})
