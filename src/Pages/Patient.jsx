import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PatientProp from '../components/PatientProp'
import { Link } from 'react-router-dom'

const Patient = props => {
  const [patientData, setpatientData] = useState([])
  // const patData = props.location.state.show
  const fetchData = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/patients/${props.match.params.id}`
    )
    setpatientData(resp.data)
    console.log(patientData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="content">
      <section className="patient-title">
        <h2 className="patient-name">
          {patientData.firstName} {patientData.lastName}
        </h2>
        <div className="divide"></div>
        <Link to="/assignhw">
          <button className="hw">Assign HW</button>
        </Link>
      </section>
      <div className="patient-info">
        <section>
          <h3 className="teal">Schedule:</h3>
          <p>{patientData.schedule}</p>
        </section>
        <section>
          <h3 className="teal">Emergency Notifications:</h3>
          <ul>
            <li>Info Here</li>
          </ul>
        </section>
        <section>
          <h3 className="teal">Past Logs:</h3>
          <ul>
            <li>Info Here</li>
          </ul>
        </section>
        <section>
          <h3 className="teal">Notes:</h3>
          <ul>
            <li>Note</li>
          </ul>
          <span>
            <Link to="/addnote">
              <button className="submit">Add Notes</button>
            </Link>
            <button className="delete">Delete Patient</button>
          </span>
        </section>
      </div>
    </div>
  )
}

export default Patient
