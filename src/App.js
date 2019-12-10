import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (

    <Router>
     <Nav/>
      <Switch>
        <div className='App' >
          <Route path='/' exact component={Home} />
          <Route path='/about/:id' component={About} />
          <Route path='/shop' component={Shop} />
          {/* <Route component={Home} /> */}

        </div>
      </Switch>
    </Router>
  );
}

export default App;
