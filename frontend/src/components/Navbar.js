import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {

    const { logout } = useLogout()
    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="header-container">
                <Link to="/">
                    <h1>Notes to Myself</h1>
                </Link>
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
                </Link>
                <nav className="login-page">
                    <div>
                        <button onClick={handleClick} className="btn-logout">Log Out</button>
                    </div>
                    <div>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;