import { Link } from "react-router-dom";
import Navbar from "../componets/Navbar";

function LandingPage() {


    return (
        <>
        
       
        { (localStorage.getItem('authorized') === "1") ? (
            <>
            <Navbar/>  
            <div>
                <h1 style={{textAlign:"center", fontSize:"60px"}}>Landing Page</h1>
            </div>
            </>)
            : (
            <>
            <div >
                <h1 style={{textAlign:"center", fontSize:"60px"}}>Landing Page</h1>
            </div> 
            <Link to="/login" > Go to Log in</Link>
            </>)}
        
        </>
    )
}

export default LandingPage
