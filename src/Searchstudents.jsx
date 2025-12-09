import React from 'react'

const Searchstudents = ({search, setSearch}) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Searchstudents