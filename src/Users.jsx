import React, { Component } from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => {
                console.log("users:", users)
                this.setState({ users: users })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <h1>Users - Class Component: API Calls</h1>
                <hr />
                <div>
                    {this.state.users.map(user => (
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
}

export default Users;
