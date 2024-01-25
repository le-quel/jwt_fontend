import React from "react";
import { Routes, Route } from 'react-router-dom';
import Nav from "../components/navigation/nav";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Users from "../components/ManagerUser/Users";
import PrivateRoutes from "./PrivateRoutes";
const AppRoutes = (props) => {
    return (
        <Routes>
            <PrivateRoutes path="/Project" component={<span>Project hello</span>} />
            <Route path="/PrivateRoutes" element={<PrivateRoutes />} />
            <Route path="/nav" element={<Nav />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={< Register />} />
            <Route path="/Users" element={< Users />} />
        </Routes>
    )

}
export default AppRoutes;