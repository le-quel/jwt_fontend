import React from "react";
import { Link } from 'react-router-dom';
// import axios from "axios"
import { useEffect, useState } from 'react';
import "../register/register.scss";
const Register = (props) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [comfirmPassword, setComfirmPassword] = useState("");
    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/test-api');
                const result = await response.json();
                // setData(result);
                console.log(result);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, []);

    const hanldeRegister = () => {
        let userData =
        {
            email: email,
            phone: phone,
            username: username,
            password: password
        }
        console.log(">>>check userData :", userData);
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
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={email} onChange={(event) => setEmail(event.target.value)} />

                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputPhoneNumber" class="form-label">Phone number</label>
                            <input type="phone" class="form-control" id="exampleInputPhoneNumber"
                                value={phone} onChange={(event) => setPhone(event.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputUserName" class="form-label">User Name</label>
                            <input type="text" class="form-control" id="exampleInputUserName"
                                value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>

                        <div class="mb-3">
                            <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleInputComfirmPassword" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputComfirmPassword"
                                value={comfirmPassword} onChange={(event) => setComfirmPassword(event.target.value)} />
                        </div>

                        <button type="submit" class="btn btn-primary form-control link" onClick={() => hanldeRegister()} > Register</button><br></br>
                        <div className="forrm-coltrol forgot"><Link to="/"> Forgot your password ?</Link></div>


                    </div>
                </div>
            </div>
        </div >
    )
}
export default Register;