import React, {Component} from 'react'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: true
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-parent">
          <Switch>
            <Route
              exact
              path="/"
              render={() => ((this.state.loggedIn)
              ? (<Redirect to="/profile"/>)
              : (<Redirect to="/login"/>))}/>
            {/* <Route path="/login" component={Login}/>
            <Route path="/profile" component={Profile}/> */}
            <Route path="/" component={Dashboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;