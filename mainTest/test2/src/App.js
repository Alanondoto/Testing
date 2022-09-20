import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Table from './table';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5500?q=${query}`);
      setData(res.data);
    };
    fetchUsers()
  }, [query]); 

  return (
    <div className='app'>
      <input
        placeholder='Search...'
        className='search'
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
     {<Table data={data} />}
    </div>
  )
}

export default App;