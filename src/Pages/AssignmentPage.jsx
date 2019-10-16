import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import config from '../config'

const AssignmentPage = props => {
  const [assignData, setassignData] = useState([])

  const fetchData = async () => {
    const resp = await Axios.get(
      config.API_URL +
        `api/patients/${props.match.params.patientId}/assign/${props.match.params.assignmentId}`
    )
    setassignData(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="assignment-page content">
      <section>
        <h2 className="teal">{assignData.title}</h2>
      </section>
      <section className="task1">
        <h3 className="task-title">Task:</h3>
        <p>{assignData.task}</p>
      </section>
      <section>
        <h4>Resources:</h4>
        <p className="resources">{assignData.resources}</p>
      </section>

      <Link to={{ pathname: `/patients/${props.match.params.patientId}` }}>
        <button className="submit">Return</button>
      </Link>
    </div>
  )
}

export default AssignmentPage
