import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FnCounter from './components/FnCounter';
import ListProducts from './components/ListProducts';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container'>
      {/* bg-dark navbar-dark */}
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
      <nav className="navbar bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">React Training</a>

          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Counter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FnCounter</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
