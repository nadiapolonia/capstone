import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import config from '../config'

const NotePage = props => {
  const [noteData, setnoteData] = useState([])

  const fetchData = async () => {
    const resp = await axios.get(
      config.API_URL +
        `api/patients/${props.match.params.patientId}/notes/${props.match.params.noteId}`
    )
    setnoteData(resp.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="assignment-page content">
        <section>
          <h2 className="teal">{noteData.title}</h2>
        </section>
        <section className="task">
          <h3 className="task-title">Note:</h3>
          <p>{noteData.description}</p>
        </section>

        <Link to={{ pathname: `/patients/${props.match.params.patientId}` }}>
          <button className="submit">Return</button>
        </Link>
      </div>
    </div>
  )
}

export default NotePage
