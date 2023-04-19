import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Help from './pages/Help';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ZipCodeLocator from './pages/ZipCodeLocator';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element = {<HomePage />}></Route>
            <Route path="/users" element = {<UserInfo />}></Route>
            <Route path="/zip-code-locator" element = {<ZipCodeLocator />}></Route>
            <Route path="/help" element = {<Help />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
