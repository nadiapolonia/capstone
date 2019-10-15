import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Home from './Pages/Home'
import Patient from './Pages/Patient'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AddPatientPage from './Pages/AddPatientPage'
import AssignHWPage from './Pages/AssignHWPage'
import AddNotesPage from './Pages/AddNotesPage'
import Inbox from './Pages/Inbox'
import AssignmentPage from './Pages/AssignmentPage'
import NotePage from './Pages/NotePage'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/patients/:id" component={Patient}></Route>
            <Route exact path="/addpatient" component={AddPatientPage}></Route>
            <Route
              exact
              path="/patients/:id/assign"
              component={AssignHWPage}
            ></Route>
            <Route
              exact
              path="/patients/:patientId/assign/:assignmentId"
              component={AssignmentPage}
            ></Route>
            <Route
              exact
              path="/patients/:patientId/notes/:noteId"
              component={NotePage}
            ></Route>
            <Route
              exact
              path="/patients/:id/notes"
              component={AddNotesPage}
            ></Route>
            <Route exact path="/inbox" component={Inbox}></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
