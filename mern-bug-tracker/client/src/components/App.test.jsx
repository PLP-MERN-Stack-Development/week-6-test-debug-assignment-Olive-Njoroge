import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders app with title', () => {
  render(<App />)
  expect(screen.getByText(/bug tracker/i)).toBeInTheDocument()
})