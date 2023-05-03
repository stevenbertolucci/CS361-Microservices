import './App.css';
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Help from './pages/Help';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ZipCodeLocator from './pages/ZipCodeLocator';
import UserInfo from './pages/UserInfo';
import { useAuth0 } from '@auth0/auth0-react';
import LogInPage from './pages/LogInPage';

function App() {

  const {isAuthenticated} = useAuth0();

  const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
    if (theme === 'light') {
        setTheme('dark');
    } 
    else {
        setTheme('light');
    }
};

  useEffect(() => {
      document.body.className = theme;
  }, [theme]);
  
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element = {isAuthenticated ? <HomePage /> : <LogInPage />}></Route>
            <Route path="/users" element = {<UserInfo />}></Route>
            <Route path="/zip-code-locator" element = {<ZipCodeLocator />}></Route>
            <Route path="/help" element = {<Help />}></Route>
          </Routes>
        </Router>
      </header>
      <footer>&#169; 2023 Steven Bertolucci</footer>
    </div>
  );
}

export default App;
