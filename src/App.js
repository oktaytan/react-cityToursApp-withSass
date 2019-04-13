import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path='/tours' component={TourList} />
            <Route path='/about' component={About} />
            <Route path='/' component={Home} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
