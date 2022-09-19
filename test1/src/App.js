import React, { useState } from 'react';
import './App.css';
import {users} from './users';

function App() {
  const [query, setQuery] = useState(''); 
  return (
    <div className='app'>
      <input
        type='text'
        placeholder='Search...'
        className='search' 
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className='list'>
        {users.filter(user =>
          user.username.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className='listItem'>
            {user.username}</li>
        ))}
      </ul> 
    </div>
  );
}

export default App;
