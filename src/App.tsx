import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <>
      <p>Home</p>
    </>
  )
}

function Info() {
  return (
    <>
      <p>Info</p>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div>
          <h1>build success</h1>
          <nav>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/info">info</Link>
          </nav>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />}/>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
