CÁCH HẠ VERSION NODEJS

câu lệnh cài đặt các phiên bản nodejs "nvm install 14"
câu lệnh sử dụng "nvm use 14"
Hoặc nếu bạn muốn phiên bản Node.js này được sử dụng mặc định, bạn có thể chạy:
nvm alias default 14

                            BÀI 1 CÀI ĐẶT SASS
1. set up môi trường sass " npm install --save-exact$1.48.0 ";
sass cho phép lồng các element con vào trong element cha
2. rsf (react function component) tạp form component tự động 
3. cài đặt react-router-dom bằng câu lệnh " npm install --save-exact react-router-dom@5.3.0 "

4. chuyển trang với react router import Nav from "./components/navigation/nav";
import "./App.scss";
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <switch>
          <Route path="/news">
            news
          </Route>
          <Route path="/about">
            about
          </Route>
          <Route path="/contact">
            contact
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;

                BÀI 2: CÀI ĐẶT BOOTSTRAP tạo file login.js và code giao điện login fb

1. CÂU LỆNH " npm install --save-exact bootstrap@5.1.3 "
class display none khi man hinh ở size sm " d-none d-sm-block "
nãy giờ thầy dạy bootstrap max hay mà ko chịu xem
break point bootstrap
2. câu lệnh display none khi màn hình nhỏ "  d-sm-none "

                    BÀI 3: TẠO FORM ĐK BẰNG USEHISTORY
1. import usehistory vào file login để xài hàm chuyển trang bằng sk onclick  " import { useHistory } from 'react-router-dom'; "
2. tạo function nhận sự kiện onclick 
   let history = useHistory();
    const handleCreateNewAccount = () => {
        alert("me")
    }
    à version này éo cho dùng his nữa xài lại link đi em
  tạo file register chứa các input đk rồi submit cho về lại login



                    BÀI 3: install axios và test api bằng useEffect

1.  câu lệnh install axios "   npm install --save-exact axios@0.25.0 "
2. 3 thư viện dùng để call api và tạo request
  - axios (mạnh nhất)
  - fetch
  - request
3. để dùng axios thì import nó vào file register " import axios from "axios" "

import axios from "axios"
import { useEffect } from 'react';
import "../register/register.scss";
const Register = (props) => {
    const getApi = () => {

    }
    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then(data => {
            console.log(">>>check api dataa", data);
        })
    }, [])
}

import hàm useEffect và axios để test api và dùng useefect để đọc json từ api
-> lên trang https://reqres.in/ để lấy api có sẳn bỏ vào axios.get để đọc object được render ra từ console.log
lần đầu tiên biết xài api đã quá quăng log ra cho ae coi chơi nè
thôi dài quá đéo bỏ nữa
nestjs nó viết cả font end và backend cùng trong một pj (2 trong 1 lên dễ bị hack web tin tức ưu tiên xài bị hack cũng đéo mất gì nên xài để đỡ mất time cấu hình hệ thống) tách riêng dễ nâng cấp

5. qua jwtbackend viết api

                              BÀI 4 : LẤY DATA TỪ FORM ĐĂNG KÝ

1. import useState vào file register
import { useEffect, useState } from 'react';
2. khai báo biến
 const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [comfirmPassword, setComfirmPassword] = useState("");
3. đặt name value để lấy data
 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={email} onChange={(event) => setEmail(event.target.value)} />
   <input type="phone" class="form-control" id="exampleInputPhoneNumber"
                                value={phone} onChange={(event) => setPhone(event.target.value)} />
  <input type="text" class="form-control" id="exampleInputUserName"
                                value={username} onChange={(event) => setUsername(event.target.value)} />
 <input type="password" class="form-control" id="exampleInputPassword1"
                                value={password} onChange={(event) => setPassword(event.target.value)} />
 <input type="password" class="form-control" id="exampleInputComfirmPassword"
                                value={comfirmPassword} onChange={(event) => setComfirmPassword(event.target.value)} />

4. đặt sự kiện ở nut button không cần form bọc ngoài vẫn lấy đc data
   <button type="submit" class="btn btn-primary form-control link" onClick={() => hanldeRegister()} > Register</button><br></br>
  
5. Viết hàm get data 
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

                        BÀI 5: VALIDATE FORM WITH REACT


1. cài package thông báo lỗi npm react toastify " npm install --save-exact toastify@8.1.0 " những lỗi nên chuyển qua version thấp hơn 6.2.0
2. import nó vô  
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
3. xài ở các vị trí 
 const hanldeRegister = () => {

        let userData =
        {
            email: email,
            phone: phone,
            username: username,
            password: password
        }
        console.log(">>>check userData :", userData);
        toast.success("Wow so easy!");
    }
   <ToastContainer /> nằm trong form 
validate
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
        let userData =
        {
            email: email,
            phone: phone,
            username: username,
            password: password
        }
        console.log(">>>check userData :", userData);
        // toast.success("Wow so easy!");
    }
     <input type="email" class={isCheckInput.isValidEmail ? 'form-control' : 'form-control is-invalid'} id="exampleInputEmail1" aria-describedby="emailHelp"
    <input type="phone" class={isCheckInput.isValidPhone ? 'form-control' : 'form-control is-invalid'} id="exampleInputPhoneNumber"


                          BÀI 6: Cấu hình lại api register
              
1. đổi cấu trúc get api register bằng hàm userServices rồi import vô register
import axios from "axios";
const registerNewUser = (email, phone, username, password) => {
    return axios.post('http://localhost:8080/api/v14/register', {
        email, phone, username, password
    })
}
export { registerNewUser }

file register 
  const hanldeRegister = async () => {

        let check = isValidInput();
        if (check == true) {
            // sử dụng hàm thông qua file services
            let response = await registerNewUser(email, phone, username, password)
            let serverData = response.data
            if (+serverData.EC === 0) {
                toast.success(serverData.EM)

                this.props.history.push("/login");
            } else {
                toast.error(serverData.EM)
            }
            console.log(">>>>check data register: ", response);
        }
  hàm history chưa chuyển trang được để fix sau

                                    BÀI 7: API LOGIN
      
1. file login import và một số hàm 
import { Link, useNavigate } from 'react-router-dom';
import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { loginUser } from '../../services/userServices';
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
2. input có element như sau 
  <input type="password" className={ObjValidInput.isValidPassword ? 'form-control' : 'is_invalid form-control'} 
  autoComplete="current-password"  value={password} onChange={(event) => setPassword(event.target.value)} />
  <input type="email" className={ObjValidInput.isValidValueLogin ? 'form-control' : 'is_invalid form-control'} id="exampleInputEmail1 aria-describedby="emailHelp" autoComplete="email" value={valueLogin} onChange={(event) => setValueLogin(event.target.value)} />

3.   ở backend tạo hàm api mới như các hàm api login ở loginRegister và cấu hình router là đc 
file api.js
  router.post("/login", apicontroller.handleLogin)
file apihomecontroller
const handleLogin = async (req, res) => {
    return res.status(200).json({
        EM: 'Login successful',
        EC: '0',
        DT: '',
        data: 'Login success!'
    });
}

                                BÀI 8: vIẾT API LOGIN Ở BACKEND
            
.end chức năng login
 dùng navigation để chuyển trang khi đăng nhập thành công
 tạo component user
 1. file users.js
 import { NavLink } from 'react-router-dom';
const User = (props) => {
    return (
        <div>
            users component
            <div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default User;
2.  ở file app.js import và effecth token để kiểm tra
 const [account, setAccount] = useState({});
  useEffect(() => {
    let session = sessionStorage.getItem("key");
    if (session) {
      setAccount(account);
    }
  }, []);
      <Route path="/Users" element={< Users />} />
3. cài đặt package lodash " npm install --save-exact lodash@4.17.21 ".
và import vào file app.js 
import _ from 'lodash';



4. check session nếu có session mới cho vào user nếu ko sẽ đá lại trang login
users.js
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Users = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if (!session) {
            navigate('/login');
        }
    }, [])

    return (
        <div>
            Users component
            <div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Users;

App.js
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

