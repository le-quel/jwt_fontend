import React from "react";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Nav from "./components/navigation/nav";
import "./App.scss";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Users from "./components/ManagerUser/Users";
import _ from 'lodash';
function App() {
  const [account, setAccount] = useState({});
  useEffect(() => {
    let session = sessionStorage.getItem("key");
    if (session) {
      setAccount(JSON.parse(session));

    }
  }, []);
  return (

    <Routes>
      {account && !_.isEmpty(account) && account.isAuthentication && < Users />}
      <Route path="/nav" element={<Nav />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={< Register />} />
      <Route path="/Users" element={< Users />} />
    </Routes>
  );
}

export default App;
