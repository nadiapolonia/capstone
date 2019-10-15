import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { OutputQuoteStyle } from 'terser'

const Home = () => {
  const [patients, setpatients] = useState([])
  const [quote, setquote] = useState('')
  const patient = { patient }

  const fetchData = async () => {
    const resp = await axios.get('https://localhost:5001/api/patients')
    console.log(resp.data)
    setpatients(resp.data)
  }

  const fetchQuote = async () => {
    const resp = await axios.get('https://quotes.rest/qod?category=inspire')
    setquote(resp.data.contents.quotes[0])
    console.log(resp.data.contents.quotes)
  }

  useEffect(() => {
    fetchData()
    fetchQuote()
  }, [])

  return (
    <div>
      <div>
        <section className="background">
          <h1 className="welcome-message">
            Welcome! ♥ How are you feeling today?
          </h1>
        </section>
        <section className="quote-title">Quote of the Day:</section>
        <section className="quote flex">
          "{quote.quote}" - {quote.author}
        </section>
      </div>
      <div className="home-content">
        <h2 className="teal">Your Patients</h2>
        <section>
          <ul className="flex-patient">
            {patients.map((patient, i) => {
              return (
                <li key={i} patient={patient}>
                  <Link
                    className="patient"
                    to={{
                      pathname: `/patients/${patient.id}`,
                      state: { patient }
                    }}
                  >
                    <h3>
                      {patient.lastName}, {patient.firstName}
                    </h3>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
        <Link to="/addpatient">
          <button className="add-patient-button">Add Patient</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
