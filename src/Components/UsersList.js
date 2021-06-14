import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { Table } from 'react-bootstrap'
function UsersList() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response)
                setUsers(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    })
    return (
        <div >
<h2 style={{color:'#194444'}}> List OF USERS</h2>
<Table  striped bordered hover variant="dark">
                <thead>
                    <tr>
                      <th>  </th>
                        <th > Name</th>

                        <th>Username</th>
                        <th>email</th>
                        <th>adresse</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} >
                            <td><i class="far fa-user"></i></td>
                            <td><h5  variant="drak">{user.name}</h5></td>
                            <td>{user.username}</td> 
                            <td>{user.email}</td>
                            <td>{user.address.street}</td>
                       </tr>
                            
                            ))}
                </tbody>
            </Table>

        </div>
    )
}

export default UsersList