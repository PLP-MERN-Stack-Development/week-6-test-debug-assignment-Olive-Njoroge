// BugForm.jsx
import { useState } from 'react'

export default function BugForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <form>
      <label>
        Title:
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label><br></br><br></br>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label><br></br><br></br>
      <button type="submit">Submit</button>
    </form>
  )
}
