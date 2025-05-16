import React from 'react'
import ChildB from '../ChildB'

const ChildA = ({groupName}) => {
  return (
    <div style={{border: "1px solid black", padding: "10px"}}>
        <h5>ChildA</h5>
        <ChildB groupName={groupName} />
    </div>
  )
}

export default ChildA