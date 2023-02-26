import React from 'react'

export default function SearchItem({ search, setSearch }) {
  return (
    <div className='searchForm'>
        <label htmlFor='search'>Search</label>
        <input 
            type="text" 
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}
