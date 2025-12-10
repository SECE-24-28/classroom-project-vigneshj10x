import React, { useContext } from 'react'
import { DataContext } from './DataContext'

const One = () => {
    const { data } = useContext(DataContext)
  return (
    <div>
        <h1>Count: {data.length}</h1>
    </div>
  )
}

export default One