import React, { Suspense, useContext } from 'react';
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

import ViewCart from './components/ViewCart';
import { AppThemeContext } from './context/AppThemeContext';
import RxjsGadgetStore from './components/RxjsGadgetStore';
import RxjsViewCart from './components/RxjsViewCart';
import HelloWithError from './components/HelloWithError';
import AppErrorBoundary from './components/AppErrorBoundary';
import ListCustomers from './components/ListCustomers';

//static import
//import GadgetStore from './components/GadgetStore';

//dynamic import 
const GadgetStore = React.lazy(() => import('./components/GadgetStore'));

function App() {

  const themeContext = useContext(AppThemeContext);

  const mode = themeContext.mode;
  const dispatch = themeContext.dispatch;

  function switchTheme() {


    if (mode === "dark") {
      dispatch!({ type: "SET_LIGHT" });
    }
    else {
      dispatch!({ type: "SET_DARK" });
    }
  }


  return (
    <Router basename='/react/'>
      <div className='container'>
        {/* bg-dark navbar-dark */}
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
        <nav className={`navbar bg-${mode} navbar-${mode}`}>
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
              <li className="nav-item">
                <Link className="nav-link" to="/gadgets">Gadget Store</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewcart">View Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rxjsgadgets">Rxjs Store</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rxjsviewcart">Rxjs Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/errorb">Error Boundary</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customers">Customers</Link>
              </li>
              <li className="nav-item">
                <button className='btn btn-warning' onClick={switchTheme}>Switch Theme</button>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          {/* Views */}
          <AppErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/' element={<Hello message='Hello React' />} />
                <Route path='/counter' element={<Counter initValue={5} />} />
                <Route path='/fncounter' element={<FnCounter initValue={10} />} />
                <Route path='/products' element={<ProtectedRoute> <ListProducts /> </ProtectedRoute>} />

                <Route path='/products/:id' element={<EditProduct />} />
                <Route path='/login' element={<Login />} />
                <Route path='/gadgets' element={<GadgetStore />} />
                <Route path='/viewcart' element={<ViewCart />} />

                <Route path='/rxjsgadgets' element={<RxjsGadgetStore />} />
                <Route path='/rxjsviewcart' element={<RxjsViewCart />} />
                <Route path='/errorb' element={<HelloWithError message="" />} />
                <Route path='/customers' element={<ListCustomers/>} />
              </Routes>
            </Suspense>
          </AppErrorBoundary>
        </main>
      </div>
    </Router>
  );
}

export default App;
