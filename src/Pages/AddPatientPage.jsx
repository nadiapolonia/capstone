import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddPatientPage = () => {
  const [addpatientform, setaddpatientform] = useState({
    LastName: '',
    FirstName: '',
    Schedule: '',
    Diagnoses: ''
  })

  const addPatient = async e => {
    // e.preventDefault()
    const resp = await axios.post(
      `https://localhost:5001/api/Patients`,
      addpatientform
    )
  }

  const update = e => {
    setaddpatientform({
      ...addpatientform,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div className="content">
      <h2 className="teal">Add Patient</h2>
      <form onSubmit={addPatient} action="">
        <div>
          <h4>Last Name</h4>
          <input
            className="box"
            id="LastName"
            required
            type="text"
            placeholder="Last Name"
            onChange={update}
          />
        </div>
        <div>
          <h4>First Name</h4>
          <input
            className="box"
            id="FirstName"
            required
            type="text"
            placeholder="First Name"
            onChange={update}
          />
        </div>
        <div>
          <h4>Schedule</h4>
          <input
            className="box"
            id="Schedule"
            required
            type="text"
            placeholder="Schedule"
            onChange={update}
          />
        </div>
        <div>
          <h4>Diagnoses</h4>
          <input
            className="box"
            id="Diagnoses"
            required
            type="text"
            placeholder="Diagnoses"
            onChange={update}
          />
        </div>
        <button className="submit" type="submit" name="action">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddPatientPage
