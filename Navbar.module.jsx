import { useState } from 'react';
import './Navbar.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <h1 className="navbar-logo">Logo</h1>
        <button onClick={toggleNavbar} className="navbar-menu-button">
          &#9776;
        </button>
        <ul className={`navbar-nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#">My Profile</a></li>
          <li><a href="#">Register complaints</a></li>
          <li><a href="#">Registered complaints</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Log Out</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;