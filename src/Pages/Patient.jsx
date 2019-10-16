import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PatientProp from '../components/PatientProp'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { tsConstructorType } from '@babel/types'
import { withRouter } from 'react-router-dom'
import config from '../config'

const Patient = props => {
  const [patientData, setpatientData] = useState([])
  const [noteData, setnoteData] = useState([])
  const [assignData, setassignData] = useState([])
  const [doTheRedirect, setDoTheRedirect] = useState(false)
  const assign = { assign }
  const notes = { notes }

  // const patData = props.location.state.show
  const fetchData = async () => {
    const resp = await axios.get(
      config.API_URL + `api/patients/${props.match.params.id}`
    )
    setpatientData(resp.data)
    console.log(patientData)
  }

  const deletePatient = async () => {
    // e.preventDefault()
    const resp = await axios.delete(
      config.API_URL + `api/Patients/${props.match.params.id}`
    )
    setDoTheRedirect(true)
  }

  const fetchNoteData = async () => {
    const resp = await axios.get(
      config.API_URL + `api/patients/${props.match.params.id}/notes`
    )
    setnoteData(resp.data)
    console.log(noteData)
  }

  const fetchAssignData = async () => {
    const resp = await axios.get(
      config.API_URL + `api/patients/${props.match.params.id}/assign`
    )
    setassignData(resp.data)
  }

  useEffect(() => {
    fetchData()
    fetchNoteData()
    fetchAssignData()
  }, [])

  return (
    <div className="content">
      {doTheRedirect ? <Redirect to="/" /> : null}
      <section className="patient-title">
        <h2 className="patient-name">
          {patientData.firstName} {patientData.lastName}
        </h2>
        <div className="divide"></div>
        <Link to={{ pathname: `/patients/${props.match.params.id}/assign` }}>
          <button className="hw">Assign HW</button>
        </Link>
      </section>
      <div className="patient-info">
        <section>
          <h3 className="teal underline">Schedule:</h3>
          <p>{patientData.schedule}</p>

          <h3 className="teal underline">Diagnoses:</h3>
          <p>{patientData.diagnoses}</p>
        </section>
        <section>
          <h3 className="teal underline">Emergency Notifications:</h3>
          <ul>
            <li>None posted.</li>
          </ul>
        </section>
        <section>
          <h3 className="teal underline">Past Logs:</h3>
          <ul>
            <li>None posted.</li>
          </ul>
        </section>
        <section>
          <h3 className="teal underline">Homework Assignments:</h3>
          <ul>
            {assignData.map((assign, i) => {
              return (
                <li key={i} assign={assign}>
                  <Link
                    className="no-line"
                    to={{
                      pathname: `/patients/${props.match.params.id}/assign/${assign.id}`,
                      state: { assign }
                    }}
                  >
                    <h4>Assignment: {assign.title}</h4>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
        <section className="notes-section">
          <h3 className="teal underline">Notes:</h3>
          <ul>
            {noteData.map((notes, i) => {
              return (
                <li key={i} notes={notes}>
                  <Link
                    className="no-line"
                    to={{
                      pathname: `/patients/${props.match.params.id}/notes/${notes.id}`,
                      state: { notes }
                    }}
                  >
                    <h4> Note: {notes.title}</h4>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
        <section>
          <span>
            <Link to={{ pathname: `/patients/${props.match.params.id}/notes` }}>
              <button className="submit">Add Notes</button>
            </Link>

            {/* <Link to="/"> */}
            <button className="delete" onClick={deletePatient}>
              Delete Patient
            </button>
            {/* </Link> */}
          </span>
        </section>
      </div>
    </div>
  )
}

export default Patient
