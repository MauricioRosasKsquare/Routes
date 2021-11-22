import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/login" onClick={() => localStorage.setItem('authorized', "0")} style={{ 
                              color: 'white', 
                              backgroundColor: '#f1356d',
                              borderRadius: '8px' 
                            }}>Log Out</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;