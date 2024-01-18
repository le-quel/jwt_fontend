import { Link, useNavigate } from 'react-router-dom';
import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { loginUser } from '../../services/userServices';

import "../login/login.scss";
const Login = (props) => {

    const [valueLogin, setValueLogin] = useState("")
    const [password, setPassword] = useState("")
    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true
    }
    const [ObjValidInput, setObjValidInput] = useState(defaultObjValidInput)
    const navigate = useNavigate();
    const hanldeLoginCreateNewAccount = () => {
        navigate('/register');
    }
    const hanldeLogin = async () => {
        setObjValidInput(defaultObjValidInput);

        if (!valueLogin) {
            setObjValidInput({ ...defaultObjValidInput, isValidLogin: false })
            toast.error("Please enter email or phone number")
            return
        } else if (!password) {
            setObjValidInput({ ...defaultObjValidInput, isValidPassword: false })
            toast.error("Please enter your password")
            return
        }
        await loginUser(valueLogin, password);
    }
    return (
        <div className="login-container">
            <div className="container">
                <div className="row">
                    <div className="content-left col-7 d-none d-sm-block">
                        <div className="logo">HOI DAN IT</div>
                        <div className="title">Hỏi Dân IT help you connect and share the peolpe in your life </div>
                    </div>
                    <div className="content-right col-sm-5 ">

                        <div className="mb-3">
                            <div className="logo d-sm-none">HOI DAN IT</div>
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className={ObjValidInput.isValidValueLogin ? 'form-control' : 'is_invalid form-control'} id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="email"
                                value={valueLogin} onChange={(event) => setValueLogin(event.target.value)} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className={ObjValidInput.isValidPassword ? 'form-control' : 'is_invalid form-control'} autoComplete="current-password"
                                value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <ToastContainer />
                        <button type="submit" className="btn btn-primary form-control" onClick={() => hanldeLogin()}>Submit</button><br></br>
                        <div className="form-coltrol forgot"><Link to="/"> Forgot your password ?</Link></div>

                        <hr></hr>
                        <button className="btn btn-success form-control" onClick={() => hanldeLoginCreateNewAccount()}>
                            <Link to="/register">Create new account</Link> </button>

                    </div>

                </div>
            </div>
        </div >
    )
}
export default Login;