import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './Form'
import Second from './Second'
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Form />}/>
      <Route path='/second' element={<Second />}/>

      </Routes>
    </div>
  )
}

export default App
