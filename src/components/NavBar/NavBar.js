import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="navbar-logo">Shoes Store</h1>
        <Link className="car-button" to={'/car'}>
          <FaShoppingCart />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
