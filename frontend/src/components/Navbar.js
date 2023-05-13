import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div className="header-container">
                <Link to={'/'}>
                    <h1>Notes to Myself</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;