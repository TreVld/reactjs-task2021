import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import Button from '../Button'

let container: HTMLDivElement | null = null
const text = 'Hello world'

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('render Button', () => {
  it('should render the content', () => {
    act(() => {
      render(
        <Button>{ text }</Button>,
        container
      )
    })

    expect(container.textContent).toBe(text)
  })

  it('should render the link', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Button to="/">{ text }</Button>
        </BrowserRouter>,
        container
      )
    })

    expect(container.querySelector('a')).not.toBeNull()
  })

  it('should render the large button', () => {
    act(() => {
      render(
        <Button lg>{ text }</Button>,
        container
      )
    })
    const button = container.querySelector('button')
    expect(button.className.includes('btn_lg')).toBe(true)
  })

  it('should render the primary button', () => {
    act(() => {
      render(
        <Button primary>{ text }</Button>,
        container
      )
    })
    const button = container.querySelector('button')
    expect(button.className.includes('btn_primary')).toBe(true)
  })
})
