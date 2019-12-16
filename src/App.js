import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as history from 'history'
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-blue-dark text-white">
      <Router basename={process.env.PUBLIC_URL} history={history.createBrowserHistory()}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home title="Home"/>
          </Route>
          <Route path="/about" title="About">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
