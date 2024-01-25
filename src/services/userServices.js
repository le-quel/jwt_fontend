import axios from "axios";
const registerNewUser = (email, phone, username, password) => {
    return axios.post('http://localhost:8080/api/register', {
        email, phone, username, password
    })
}
const loginUser = (valueLogin, password) => {
    return axios.post('http://localhost:8080/api/login', {
        valueLogin, password
    })
}
const fetchAllUser = (page, limit) => {
    return axios.get(`http://localhost:8080/api/users/read?page=${page}&limit=${limit}`) //teamplate string 

}

export { registerNewUser, loginUser, fetchAllUser }