import React, {useState, useEffect} from 'react';
import axios from 'axios';

const NewUsers = () => {
    let myUsers = [];
    const [users, setUsers] = useState(myUsers);

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            console.log(res);
            setUsers(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    })

    return (
        <div>
            <h1>All Users - Function Component: API Calls</h1>
            <hr />
            <div>
                {users.map(user => (
                <div>
                    <h4>Name : {user.name}</h4>
                    <p>Phone : {user.phone}</p>
                    <p>Username : {user.username}</p>
                    <p>Website : {user.website}</p>
                    <hr />
                </div>))}
            </div>
        </div>
    );
}

export default NewUsers;
