import { createContext , useState,useContext } from "react";


const AuthenticationContext = createContext();

const AuthenticationProvider = ({children}) => {
    const [userData, setUserData] = useState();

    return (
        <AuthenticationContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

const useAuthentication = () => useContext(AuthenticationContext);

export { useAuthentication, AuthenticationProvider }
