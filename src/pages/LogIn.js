import { Navigate } from "react-router";


const LogIn = () => {


    console.log(localStorage.getItem('authorized'))
    function handleSubmit (e) {

        localStorage.setItem('authorized', "1");
       
        
    }

    return (
        <>
        { (localStorage.getItem('authorized') === "0") ?
        (<form onSubmit={handleSubmit}>
            <label>
                Email: <input  type="email" />
            </label>
            <label>
                Password: <input type="password" />
            </label>
            <input type="submit" />
        </form>):
        <Navigate to= "/" />}
        </> 
    )
}

export default LogIn 
