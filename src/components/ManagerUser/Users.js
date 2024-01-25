import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAllUser } from '../../services/userServices';
import '../ManagerUser/Users.scss';
const Users = (props) => {
    const navigate = useNavigate();
    const [listUser, setListUser] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentLimit, setCurrentLimit] = useState(3)
    const [totalPages, setTotalPages] = useState(0)
    useEffect(() => {
        let session = sessionStorage.getItem("account");
        if (!session) {
            navigate('/login');
        }
    }, [navigate]);  // Include navigate in the dependency array

    useEffect(() => {
        const fetchUser = async (page) => {
            try {
                const response = await fetchAllUser(page ? page : currentPage, currentLimit);
                console.log(response);

                if (response && response.data && response.data.EC === "0") {
                    console.log(response.data.DT);  // Log the user data

                    setTotalPages(response.data.DT.totalPages)
                    setListUser(response.data.DT.users);
                } else {
                    console.log('No user data in the response');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, [currentPage]);

    console.log('listUser:', listUser);  // Log listUser here to check its value



    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (
                        <div>
                            <h3>Item #{item}</h3>
                        </div>
                    ))}
            </>
        );
    }
    const handlePageClick = async (event) => {
        setCurrentPage(+event.selected + 1);

    };
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
            <div className='main'>
                <h3>Quản Lý User</h3>
                <button>refresh</button>
                <button>Add new user</button>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">STT</th>

                        <th scope="col">Email</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Group</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 ?
                        <>
                            {listUser.map((item, index) => (
                                <tr key={`row-${index}`}>
                                    <th scope="col">{index + 1}</th>

                                    <th scope="col">{item.email}</th>
                                    <th scope="col">{item.username}</th>
                                    <th scope="col">{item.Group ? item.Group.name : ''}</th>
                                </tr>
                            ))}
                        </>
                        : <tr><td>Not found user</td></tr>}

                </tbody>

            </table>
            {totalPages > 0 &&
                <div className='pagination'>

                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={totalPages}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />

                </div>
            }
        </div>
    )
}

export default Users;
