import React from 'react'

const Home = ({ userData,deleteRow}) => {

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
        </div>
    )
}

export default Home
