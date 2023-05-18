import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [apiData, setAPIData] = useState("")  
  const [shouldRefetch, setShouldRefetch] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.kanye.rest")
        setAPIData(response.data.quote)
      } catch(error) {
        console.error(error)
      }
    }
    fetchData()
  }, [shouldRefetch])

  function handleClick() {
    setShouldRefetch(prev => !prev)
  };

  return (
    <div className="App">
      <h3>{apiData}</h3>
      <p>- Kanye West</p>
      <br/>
      <button onClick={handleClick}>Click for a New Kanye Quote</button>
    </div>
  );
}

export default App;
