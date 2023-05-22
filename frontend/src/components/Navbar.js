import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="header-container">
                <Link to="/">
                    <h1>Notes to Myself</h1>
                </Link>

                <nav className="header-categories">
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
                </nav>
            </div>
        </header>
    );
}

export default Navbar;