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
