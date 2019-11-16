import React from 'react'

import './App.css'
import logo from './logo.svg'
// import Button from 'components/atoms/Button'
import { Button } from '@material-ui/core'

const App: React.FC = () => {
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
        <Button>this is my button</Button>
      </header>
    </div>
  )
}

export default App
