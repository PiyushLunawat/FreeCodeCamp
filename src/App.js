import React from 'react'
import './App.css'
import Home from './components/Home'
import Window from './components/Window'
import SignIn from './components/Signup'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Window" element={<Window />} />
        <Route path="/Signup" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    {/* <h1>This is a heading</h1> */}
    </div>
  );
}

export default App;
