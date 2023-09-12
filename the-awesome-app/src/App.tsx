import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import FnCounter from './components/FnCounter';
import ListProducts from './components/ListProducts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

      <main>
        {/* <Hello message="Hello React"/>
        <Hello message="Welcome to a React Application"/> */}
        {/* <Counter initValue={5}/>
        <Counter initValue={10}/> */}

      {/* <Counter initValue={10}/> */}
        {/* <FnCounter initValue={10}/> */}

        <ListProducts/>
      </main>
    </div>
  );
}

export default App;
