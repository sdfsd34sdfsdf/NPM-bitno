import React from 'react'
import Navbar from './pages/Navbar'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;