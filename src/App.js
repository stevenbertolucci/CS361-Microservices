import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import TrackingNumber from './pages/TrackingNumber';
import Help from './pages/Help';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShippingCost from './pages/ShippingCost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element = {<HomePage />}></Route>
            <Route path="/tracking-number" element = {<TrackingNumber />}></Route>
            <Route path="/shipping-cost" element = {<ShippingCost />}></Route>
            <Route path="/help" element = {<Help />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
