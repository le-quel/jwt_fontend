import React from "react";
import { Link } from 'react-router-dom';
import "../login/login.scss";
const Login = (props) => {

    return (
        <div className="login-container">
            <div className="container">
                <div className="row">
                    <div className="content-left col-7 d-none d-sm-block">
                        <div className="logo">HOI DAN IT</div>
                        <div className="title">Hỏi Dân IT help you connect and share the peolpe in your life </div>
                    </div>
                    <div className="content-right col-sm-5 ">
                        <form>
                            <div className="mb-3">
                                <div className="logo d-sm-none">HOI DAN IT</div>
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="email" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="current-password" />
                            </div>

                            <button type="submit" className="btn btn-primary form-control">Submit</button><br></br>
                            <div className="form-coltrol forgot"><Link to="/"> Forgot your password ?</Link></div>

                            <hr></hr>
                            <button className="btn btn-success form-control">
                                <Link to="/register">Create new account</Link> </button>
                        </form>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default Login;