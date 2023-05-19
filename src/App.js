import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ToDoList from './ToDoList';

function App() {
  // These are state variables
  const [apiData, setAPIData] = useState("")  
  const [shouldRefetch, setShouldRefetch] = useState(false)

  // The code inside will run once (upon initial render), 
  // and then after that, it will run anytime something in the dependency array changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        // calls the api
        const response = await axios.get("https://api.kanye.rest")
        // updates the apiData state
        setAPIData(response.data.quote)
      } catch(error) {
        // catches any errors and console.logs them
        console.error(error)
      }
    }
    fetchData()
  }, [shouldRefetch])


  // Toggles the shouldRefetch state and causes the useEffect to run again
  function handleClick() {
    setShouldRefetch(prev => !prev)
  };

  return (
    <div className="App">
      <h3>{apiData}</h3>
      <p>- Kanye West</p>
      <br/>
      <button onClick={handleClick}>Click for a New Kanye Quote</button>
      <ToDoList />
    </div>
  );
}

export default App;
