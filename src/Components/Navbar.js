import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './Home';
import Pagination from './Pagination';

export const Navbar = () => {
    const [userData, setuserData] = useState([]);
    const [search, setSearch] = useState('');
    const [sortDetail, setsortDetail] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const allData = userData.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                // console.log(response);
                const details = response.data;

                setuserData(details);
                console.log(details);
            })
    }

   

/***********************************DELETING DATA***************************/
    const deleteRow = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                const delData = userData.filter(item => item.id !== id);
                setuserData(delData);
            })

    }

    useEffect(() => getData()
        , [])


    // userData.reverse();
/***********************************SEARCHING IN DATA***************************/
    const filteredData = search.length === '' ? allData
        : allData.filter(udata =>
            udata.title.toLowerCase().includes(search.toLowerCase()) || udata.body.toLowerCase().includes(search.toLowerCase()))

/***********************************FILTER BY SELECTED DATA***************************/
    const newHandle = (e) => {
        console.log("working", userData)
        setuserData(userData.filter(fData => fData.userId == e.target.value))
    }
    // const newFilter = () => {
    //     setuserData(userData.filter(userData => userData.userId === 6))
    // }
    const sortField = () => {
        console.log("This method is gettign called")
        setuserData(userData.sort((a, b) => b.userId - a.userId))
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <select onChange={newHandle}>
                                        <option> select filter</option>
                                        <option value={5}>F by 5</option>
                                        <option value={6}>F by 6</option>
                                    </select>
                                    {/* {userData.filter(userData => userData.userId === 6).map((option) => (
                                            <option value={filterDetail}>{option.userId}</option>
                                        ))} */}
                                    <button className="btn" value={sortDetail} onClick={(e) => setsortDetail(sortField)}>
                                        Sort BY Descending
                                    </button>
                       
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" value={search} type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Home userData={filteredData} deleteRow={deleteRow} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={userData.length}
                paginate={paginate}
            />
        </>
    )
}
