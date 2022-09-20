import React, { useState } from 'react';
import './App.css';
import {users} from './users';
import Table from './table'

function App() {
  const [query, setQuery] = useState('');

  const keys = ['username', 'action', 'action_createad_at']

  const search = (data) => {
    return data.filter(
      (item) => 
        keys.some(key => item[key].toLowerCase().includes(query))
    )
  }

  return (
    <div className='app'>
      <input
        type='text'
        placeholder='Search...'
        className='search' 
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(users)}/>
    </div>
  )
}

export default App;
