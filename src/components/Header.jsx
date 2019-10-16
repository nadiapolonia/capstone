import React, { Component } from 'react'
import Logo from './images/logo.png'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import DropDrawer from './Hamburger/DropDrawer'
import Hamburger from './Hamburger/Hamburger'
import Backdrop from './Hamburger/Backdrop'

class Header extends Component {
  state = {
    dropDrawerOpen: false
  }

  drawerToggleClick = props => {
    this.setState(prevState => {
      return { dropDrawerOpen: !prevState.dropDrawerOpen }
    })
  }

  render() {
    let dropDrawer
    let backdrop

    if (this.state.dropDrawerOpen) {
      dropDrawer = <DropDrawer />
      backdrop = <Backdrop />
    }

    return (
      <div>
        <header className="header">
          <section className="flex">
            <img className="logo" src={Logo} />
            <Link className="no-line1" to="/">
              <h1 className="logo-title">TranquilHealth</h1>{' '}
            </Link>
          </section>
          <nav className="nav flex">
            <div>
              <Hamburger click={this.drawerToggleClick} />
              {dropDrawer}
              {backdrop}
            </div>
            <Link className="nav-item" to="/">
              <h3>Home</h3>
            </Link>
            <h3 className="nav-item">Inbox</h3>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
