// BugForm.test.jsx
import { render, fireEvent } from '@testing-library/react'
import BugForm from './BugForm'
import { describe, test, expect } from 'vitest'

describe('BugForm', () => {
  test('renders form and submits data', () => {
    const { getByLabelText, getByText } = render(<BugForm />)

    fireEvent.change(getByLabelText(/title/i), {
      target: { value: 'Test bug' }
    })

    fireEvent.change(getByLabelText(/description/i), {
      target: { value: 'Details here' }
    })

    fireEvent.click(getByText(/submit/i))
  })
})
