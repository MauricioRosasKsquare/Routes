import { Navigate } from 'react-router-dom';
import auth from '../auth'

const LogIn = () => {
    return (
        <>
        <button onClick={
            () => {
                auth.logIn(() => {
                    <Navigate to="/" />
                })
            }
        }>Log in</button>
        </> 
    )
}

export default LogIn 
