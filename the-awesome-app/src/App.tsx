import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FnCounter from './components/FnCounter';
import ListProducts from './components/ListProducts';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EditProduct from './components/EditProduct';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className='container'>
        {/* bg-dark navbar-dark */}
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
        <nav className="navbar bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">React Training</a>

            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fncounter">FnCounter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          {/* Views */}

          <Routes>
              <Route path='/' element={<Hello message='Hello React'/>} />
              <Route path='/counter' element={<Counter initValue={5}/>} />
              <Route path='/fncounter' element={<FnCounter initValue={10}/>} />
              <Route path='/products' element={<ProtectedRoute> <ListProducts/> </ProtectedRoute>} />
              
              <Route path='/products/:id' element={<EditProduct/>} />
              <Route path='/login' element={<Login/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
