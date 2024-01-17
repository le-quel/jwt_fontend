import React from "react";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
// import { useEffect, useState } from 'react';
import { useState, useEffect } from 'react';
import "../register/register.scss";
const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [comfirmPassword, setComfirmPassword] = useState("");
    const defaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidPassword: true,
        isValidComfirmPassword: true
    }
    const [isCheckInput, setIsCheckInput] = useState({

    })
    useEffect(() => {


        // const fetchData = async () => {

        //         const response = await fetch('http://localhost:8080/api/v14/test-api');
        //         const result = await response.json();
        //         // setData(result);
        //         console.log(result);

        // }

        // fetchData();

    }, []);
    const isValidInput = () => {
        setIsCheckInput(defaultValidInput)
        if (!email) {
            toast.error("Email is required !");
            console.log(">>>check defauvalid", { ...defaultValidInput });
            console.log(">>>check defauvalid", { ...defaultValidInput, isValidEmail: false });
            setIsCheckInput(prevState => ({ ...prevState, isValidEmail: false }));

            return false;
        }
        if (!phone) {
            toast.error("Phone is required !");
            return false
        }
        if (!username) {
            toast.error("Username is required !");
            return false
        }
        if (!password) {
            toast.error("Password is required !");
            return false
        }
        if (password != comfirmPassword) {
            toast.error("Password is not comfirmpassword !");
            return false
        }
        // let regx = /@/
        // if (email !== regx) {
        //     toast.error("Please enter a valid email address !");
        //     return false
        // }
        toast.success("Please wating loading...");
        return true;

    }

    const hanldeRegister = () => {

        let check = isValidInput();
        if (check == true) {
            axios.post('http://localhost:8080/api/v14/register', {
                email, phone, username, password
            })
        }
        // let userData =
        // {
        //     email: email,
        //     phone: phone,
        //     username: username,
        //     password: password
        // }
        // console.log(">>>check userData :", userData);
        // toast.success("Wow so easy!");
    }
    return (
        <div className="register-container">
            <div className="container">
                <div className="row">
                    <div className="content-left col-7 d-none d-sm-block">
                        <div className="logo">SIGN UP</div>
                        <div className="title">Hỏi Dân IT help you connect and share the peolpe in your life </div>
                    </div>

                    <div className="content-right col-sm-5 ">

                        <div class="mb-3">
                            <div className="logo d-sm-none">Sing Up</div>
                            <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class={isCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'} id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={email} onChange={(event) => setEmail(event.target.value)} />

                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPhoneNumber" class="form-label">Phone number</label>
                            <input type="phone" class={isCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'} id="exampleInputPhoneNumber"
                                value={phone} onChange={(event) => setPhone(event.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputUserName" class="form-label">User Name</label>
                            <input type="text" class="form-control" id="exampleInputUserName"
                                value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class={isCheckInput.isValidPassword ? 'form-control' : 'form-control is-invalid'} id="exampleInputPassword1"
                                value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputComfirmPassword" class="form-label">Confirm Password</label>
                            <input type="password" class={isCheckInput.isValidComfirmPassword ? 'form-control' : 'form-control is-invalid'} id="exampleInputComfirmPassword"
                                value={comfirmPassword} onChange={(event) => setComfirmPassword(event.target.value)} />
                        </div>
                        <ToastContainer />
                        <button type="submit" class="btn btn-primary form-control link" onClick={() => hanldeRegister()} > Register</button><br></br>
                        <div className="forrm-coltrol forgot"><Link to="/"> Forgot your password ?</Link></div>


                    </div>
                </div>
            </div>
        </div >
    )
}
export default Register;