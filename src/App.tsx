import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { login, logout } from './userSlice';

function App() {
  const id = useAppSelector(state => state.user.id)
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(id)
  }, [id])
  useEffect(() => {
    dispatch(login({
      id: 456
    }))
    setTimeout(() => {
      dispatch(logout())
    }, 1000);
  }, [])
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
    </div>
  );
}

export default App;
