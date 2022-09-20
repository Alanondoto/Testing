import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './table';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5500?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers()
  }, [query]); 

  return (
    <div className='app'>
      <input
        placeholder='Search...'
        className='search' 
        onChange={(e) => setQuery(e.target.value)}
      />
     {<Table data={data} />}
    </div>
  )
}

export default App;