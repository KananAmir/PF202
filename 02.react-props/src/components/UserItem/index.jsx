import React from 'react'

const UserItem = ({user}) => {
    return (
        <div key={user.id} style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "30%" }}>
            <img src={user.avatarImage} alt={user.username} style={{ width: "100%", borderRadius: "50%" }} />
            <h4>{user.username}</h4>
            <p>{user.email}</p>
        </div>
    )
}

export default UserItem