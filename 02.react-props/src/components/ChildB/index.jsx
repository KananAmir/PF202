import React from 'react'

const ChildB = ({groupName}) => {

  return (
    <div style={{border: "1px solid", padding: "10px"}}>
      <h5>ChildB</h5>
      <p>Group Name: {groupName}</p>
    </div>
  )
}

export default ChildB