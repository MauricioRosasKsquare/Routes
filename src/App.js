import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './componets/Navbar';


function App() {

  const [posts ,setPosts] = useState([])
  const [isLoading ,setIsLoading] = useState(true)
  const [error ,setError] = useState(null)
  
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        if( !res.ok ){
          throw Error('Could not fetch the data')
        }
        res.json()
      })
      .then(data => {
        setPosts(data)
        setIsLoading(false)
        setError(null)
      })
      .catch( err => {
        setIsLoading(false)
        setError(err.message)
      })  
  }, [])


  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
