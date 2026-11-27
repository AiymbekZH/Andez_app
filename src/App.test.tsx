import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('shows the app name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Andez' })).toBeInTheDocument()
  })

  it('counts clicks', async () => {
    render(<App />)
    const button = screen.getByRole('button', { name: 'Clicked 0 times' })
    await userEvent.click(button)
    expect(screen.getByRole('button', { name: 'Clicked 1 time' })).toBeInTheDocument()
    await userEvent.click(button)
    expect(screen.getByRole('button', { name: 'Clicked 2 times' })).toBeInTheDocument()
  })
})
