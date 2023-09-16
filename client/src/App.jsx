import React from 'react'
import Navbar from './pages/Navbar'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Provaider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provaider>
  )
}

export default App;