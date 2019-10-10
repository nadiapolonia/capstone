import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddNotesPage = () => {
  const [addNotes, setaddNotes] = useState({
    Description: ''
  })

  const addNote = async e => {
    e.preventDefault()
    const resp = await axios.post('https://localhost:5001/api/Note', {
      addNotes
    })
  }

  const update = e => {
    setaddNotes({
      ...addNotes,
      [e.target.id]: e.target.value
    })
  }
  return (
    <div className="content">
      <h2>Add Patient Notes</h2>
      <form onsubmit={addNote} action="">
        <div>
          <textarea
            className="box"
            id="Description"
            required
            type="text"
            placeholder="Add notes here"
            onChange={update}
            rows="12"
            cols="34"
          />
        </div>
        <button className="submit" type="submit" name="action">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddNotesPage
