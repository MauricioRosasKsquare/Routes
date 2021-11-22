import { Navigate } from "react-router";


const LogIn = () => {


    console.log(localStorage.getItem('authorized'))
    function handleSubmit (e) {

        localStorage.setItem('authorized', "1");
       
        
    }

    return (
        <>
        { (localStorage.getItem('authorized') === "0") ?
        (<div style={{borderRadius: "5px", backgroundColor:"#f2f2f2", padding: "20px"}}>
            <form onSubmit={handleSubmit}>
                <label for="email" style={{width: "100%"}}>
                    Email: <input id="email" style={{width: "100%", padding: "12px 20px", display: "inline-block", boxSizing:"border-box"}} type="email" />
                </label>

                <label id="password" style={{width: "100%"}}>
                    Password: <input id="password" style={{width: "100%", padding: "12px 20px", display: "inline-block", boxSizing:"border-box"}} type="password" />
                </label>
                <input style={{width: "100%"}} type="submit" />
            </form>
        </div>):
        <Navigate to= "/" />}
        </> 
    )
}

export default LogIn 
