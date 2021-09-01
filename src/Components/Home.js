import React from 'react'

// import ReactPaginate from 'react-paginate'
// import axios from 'axios'
// import { Navbar } from './Navbar';

const Home = ({ userData,deleteRow}) => {
    // const deleteItem = (index) => {
    //     const updatedItems = allData.filter((user) => {
    //         return user.id !== index;
    //     });
    //     setuserData(updatedItems)
    // };

    // const [pageNumber, setPageNumber] = useState(0);

    // const usersPerPage = 10;
    // const pagesVisited = pageNumber * usersPerPage;

    // const pageCount = Math.ceil(userData.length / usersPerPage);

    // const changePage = ({ selected }) => {
    //     setPageNumber(selected);
    // };

    // const displayUsers = userData
    //     .slice(pagesVisited, pagesVisited + usersPerPage)
    //     .map((user) => {
    //         return (
    //             <tr key={user.id}>
    //                 <td>{user.userId}</td>
    //                 <td>{user.title}</td>
    //                 <td>{user.body}</td>
    //             </tr>
    //         );
    //     });

    return (
        <div className="container">
            {/* <Navbar /> */}
            <div className="mt-4 ms-auto">
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <th>UserId</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Delete</th>
                        </tr>
                        {/* {displayUsers} */}
                        {userData.map(user => (
                        <tr key={user.id}>
                            <td>{user.userId}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                                <td ><i className="fas fa-trash-alt" onClick={() => deleteRow(user.id)
                                }></i></td>
                        </tr>
                    ))} 
                    </tbody>
                </table>
            </div>
            {/* <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            /> */}
        </div>
    )
}

export default Home
