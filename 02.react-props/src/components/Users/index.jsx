import React from 'react'
import UserItem from '../UserItem'

const Users = ({ users }) => {
    return (
        <div>
            <h2>Users</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "c" }}>
                {users.map((user) => (
                   <UserItem user={user}/>
                )
                )}
            </div>
        </div>
    )
}

export default Users


