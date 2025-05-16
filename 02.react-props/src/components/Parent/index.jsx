import React from 'react'
import ChildA from '../ChildA'

const ParentComp = () => {
  let groupName = "PF202"

  return (
    <div style={{border: "1px solid black", padding: "10px"}}>
        <h4>Parent</h4>
        <ChildA groupName={groupName} />
    </div>
  )
}

export default ParentComp