import { Link } from "react-router-dom";

const Navigation = () => (
    <nav className="navigation">
        <ul className='navigation-list'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/class">Classes</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation