import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import ExcelInput from './components/ExcelInput';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';


function App() {
  const spring_2024 = require('./course-list/Spring_2024.json');
  const [quarter, setQuarter] = useState('');

  const responseMessage = (response) => {
        console.log(response);
  };
  const errorMessage = (error) => {
        console.log(error);
  };
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          End date: <code>{spring_2024[0]['End Date']}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}

export default App;
