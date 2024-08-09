import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";


const ProtectedRoutes =({children})=>{
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){

        return <Navigate to='/login'/>

    }
    return children

}

export default ProtectedRoutes