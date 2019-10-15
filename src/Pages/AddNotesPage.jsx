import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const AddNotesPage = props => {
  const [addNotes, setaddNotes] = useState({
    Title: '',
    Description: ''
  })
  const [doTheRedirect, setDoTheRedirect] = useState(false)

  const addNote = async e => {
    e.preventDefault()
    const resp = await axios.post(
      `https://localhost:5001/api/Patients/${props.match.params.id}/notes`,
      addNotes
    )
    setDoTheRedirect(true)
  }

  // const redirect = async () => {
  //   setDoTheRedirect(true)
  // }

  const update = e => {
    setaddNotes({
      ...addNotes,
      [e.target.id]: e.target.value
    })
  }
  return (
    <div className="content">
      {doTheRedirect ? (
        <Redirect to={{ pathname: `/patients/${props.match.params.id}/` }} />
      ) : null}

      <h2>Add Patient Notes</h2>
      <form onSubmit={addNote} action="">
        <div>
          <input
            className="box notes-box"
            id="Title"
            required
            type="text"
            placeholder="Add title here"
            onChange={update}
          />
        </div>
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
