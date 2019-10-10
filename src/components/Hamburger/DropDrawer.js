import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'

const dropDrawer = props => (
  <nav className="drop-drawer">
    <ul>
      <li>
        <img className="logo-drop" src={Logo} />
      </li>
      <li>
        <Link className="nav-mobile-item" to="/">
          <h3>Home</h3>
        </Link>
      </li>

      <li>
        <h3 className="nav-mobile-item">Inbox</h3>
      </li>
      <li>
        <Link className="nav-mobile-item" to="/addpatient">
          <h3>Add Patient</h3>
        </Link>
      </li>
    </ul>
  </nav>
)

export default dropDrawer
