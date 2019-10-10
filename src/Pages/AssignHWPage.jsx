import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AssignHWPage = () => {
  const [addHWform, setaddHWform] = useState({
    Title: '',
    Task: '',
    Resources: ''
  })

  const addAssignment = async e => {
    e.preventDefault()
    const resp = await axios.post('https://localhost:5001/api/Assignments', {
      addHWform
    })
  }

  const update = e => {
    setaddHWform({
      ...addHWform,
      [e.target.id]: e.target.value
    })
  }
  return (
    <div className="content">
      <h2 className="teal">Add Assignment</h2>
      <form onsubmit={addAssignment} action="">
        <div>
          <h4>Title</h4>
          <textarea
            className="title box"
            id="Title"
            required
            type="text"
            placeholder="Homework Title"
            onChange={update}
            cols="25"
          />
        </div>
        <div>
          <h4>Task</h4>
          <textarea
            className="task box"
            id="Task"
            required
            type="text"
            placeholder="Task"
            onChange={update}
            rows="6"
            cols="25"
          />
        </div>
        <div>
          <h4>Resources</h4>
          <textarea
            className="resources box"
            id="Resources"
            required
            type="text"
            placeholder="Resources"
            onChange={update}
            rows="4"
            cols="25"
          />
        </div>

        <button className="submit" type="submit" name="action">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AssignHWPage
