import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthentication } from "../../context"

export const RequiresAuth = () => {
    const {userData}=useAuthentication();
    const navigate = useNavigate()
    const location  = useLocation()
    return userData ? (
        <Outlet/>
    )      :  
        (<>
        navigate("/login")
        <Navigate to="/login" state={{from:location}} replace />
        </>
    )
}