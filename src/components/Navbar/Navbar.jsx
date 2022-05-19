import { Link } from "react-router-dom"
import { useAuthentication } from "../../context";


export const Navbar = () => {
    const { userData } = useAuthentication();

    return (
        <>
            <nav className="flex-row pd-4 nav">
                <div>
                    <Link to="/" className="link-style-none font-bold">Trippy Rides</Link>
                </div>

                <div className="flex-row">
                    {userData && userData.isLogin ?
                        <>
                             <Link className="flex-column-center link-style-none pd-2" to="/login">
                                <span className="material-icons">logout</span>
                                <span>Logout</span>
                            </Link>
                        </>
                        :
                        <>
                        <Link className="flex-column-center link-style-none pd-2" to="/login">
                                <span className="material-icons">login</span>
                                <span>Login</span>
                            </Link>
                            <Link className="flex-column-center link-style-none pd-2" to="/signup">
                                <span className="material-icons">person_add_alt</span>
                                <span>Signup</span>
                            </Link>
                           
                        </>
                    }
                </div>
            </nav>
        </>
    )
}