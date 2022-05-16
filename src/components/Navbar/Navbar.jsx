import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <nav className="flex-row pd-5 nav">
                <div>
                    <Link to="/" className="link-style-none font-bold">Trippy Rides</Link>
                </div>
                <Link className="flex-column-center link-style-none" to="/login">
                <span className="material-icons">login</span>
                <span>Login</span>
                </Link>
            </nav>
        </>
    )
}