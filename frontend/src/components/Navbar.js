import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {

    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="header-container">
                <Link to="/login">
                    <h1>Notes to Myself</h1>
                </Link>
                {user && (
                    <Link className="header-categories">
                        <ul className="nav-category-container">
                            <li className="nav-category-item">
                                <NavLink to="/category/general">
                                    General
                                </NavLink>
                            </li>
                            <li className="nav-category-item">
                                <NavLink to="/category/movies">
                                    Movies
                                </NavLink>
                            </li>
                            <li className="nav-category-item">
                                <NavLink to="/category/books">
                                    Books
                                </NavLink>
                            </li>
                            <li className="nav-category-item">
                                <NavLink to="/category/shopping">
                                    Shopping
                                </NavLink>
                            </li>
                        </ul>
                    </Link>)}
                <nav className="login-page">
                    {user && (<div>
                        <span>{user.email}</span>
                        <button onClick={handleClick} className="btn-logout">Log Out</button>
                    </div>)}
                    {!user && (
                        <div>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/signup">Signup</NavLink>
                        </div>)}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;