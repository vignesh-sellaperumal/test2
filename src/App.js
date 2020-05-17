import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TestComponent from './pages/TestComponent.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <TestComponent></TestComponent>
    </div>
  );
}

export default App;
