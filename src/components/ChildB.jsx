
import React from 'react'
import ChildC from './ChildC'

const ChildB = ({name,gender}) => {
  return (
    <div>
        <ChildC name={name} gender={gender}/>
    </div>
  )
}

export default ChildB