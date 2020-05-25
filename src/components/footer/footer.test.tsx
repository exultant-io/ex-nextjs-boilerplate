import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Footer from './footer'

afterEach(cleanup)

describe('Footer', () => {
  it('runs', () => {
    const { container } = render(<Footer />)
    expect(container.getElementsByTagName('footer')).toHaveLength(1)
  })
})
