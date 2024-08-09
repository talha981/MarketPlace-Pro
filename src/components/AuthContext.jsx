import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth =()=> useContext(AuthContext);
export const AuthProvider=({children})=> {
    const [ isAuthenticated , SetIsAuthenticated] = useState(false);

    const login =()=>SetIsAuthenticated(true);
    const logout =()=>SetIsAuthenticated(false);

    

    return(
        <AuthContext.Provider value={{isAuthenticated  , login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}