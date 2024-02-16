
import React from 'react'
import ChildB from './ChildB'

const ChildA = ({name,gender}) => {
  return (
    <div>
        <ChildB name={name} gender={gender}/>
    </div>
  )
}

export default ChildA