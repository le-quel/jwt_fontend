import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";
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
        let response = await loginUser(valueLogin, password);
        if (response && response.data && +response.data.EC === 0) {
            // success
            console.log(">>> check respon đúng: ", valueLogin, password);
            toast.success("success")
            let data = {
                isAuthentication: true,
                token: "fake token"
            }
            sessionStorage.setItem("account", JSON.stringify(data));
            navigate('/Users');
            window.location.reload();
        }
        if (response && response.data && +response.data.EC !== 0) {
            // failed
            console.log(">>> check respon sai: ", valueLogin, password);
            toast.error(response.data.error.EM)
        }
        console.log(">>>>check font-end", response.data);
    }

    const handlePressEnter = (event) => {
        if (event.charCode === 13 && event.code === "Enter") {
            hanldeLogin()
        }
    };
    useEffect(() => {
        let session = sessionStorage.getItem('account')
        if (session) {
            navigate("/users")
        }
    }, [navigate])
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
                                value={valueLogin} onChange={(event) => setValueLogin(event.target.value)}
                                onKeyPress={(event) => handlePressEnter(event)} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className={ObjValidInput.isValidPassword ? 'form-control' : 'is_invalid form-control'} autoComplete="current-password"
                                value={password} onChange={(event) => setPassword(event.target.value)}

                                onKeyPress={(event) => handlePressEnter(event)} />
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