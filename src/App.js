import React from "react";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/navigation/nav";
import "./App.scss";
import Login from "./components/login/login";
import Register from "./components/register/register";


function App() {
  return (

    <Routes>
      <Route path="/nav" element={<Nav />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={< Register />} />
    </Routes>
  );
}

export default App;
