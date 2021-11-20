import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import Navbar from './componets/Navbar';
import { Routes, Route } from 'react-router-dom'
import LogIn from './pages/LogIn';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import PostsGrid from './componets/PostsGrid';
import PostCard from "./componets/PostCard"


function App() {

  const [posts ,setPosts] = useState([])
  const [isLoading ,setIsLoading] = useState(true)

  
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if( !res.ok ){
          throw Error('Could not fetch the data')
        }
        return res.json()
      })
      .then(data => {
        setPosts(data)
        setIsLoading(false)
      })
      .catch( err => {
        setIsLoading(false)
      })
  }, [])


  return (
    <div className="App">
      <Routes>
       
        <Route exact path = "/" element = { <LandingPage /> }/>
        <Route exact path = "/login" element = { <LogIn /> }/>
        <Route exact path="/posts" element= {<> <Navbar /> {!isLoading ? <PostsGrid posts={posts}  />  : "loading"} </>} />
        <Route exact path="/posts/:id" element={<> <Navbar /> {!isLoading ? <PostCard  post={posts} paginated={false} /> : "loading"} </>} />
        <Route path="*" element= { <NotFound /> }/>
        
      </Routes>
    </div>
  );
}

export default App;