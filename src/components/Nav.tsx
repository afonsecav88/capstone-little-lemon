import { Link } from 'react-router-dom';
import { MenuHamburgerButton } from './MenuHamburgerButton';

export const Nav = () => {
  return (
    <section className="nav-container">
      <nav className="nav-menu">
        <li className="nav-link-icon">
          <MenuHamburgerButton />
        </li>
        <Link to="/">
          <img src="./Logo.svg" alt="logo" className="nav-logo" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="">About</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Menu</Link>
          </li>
          <li className="nav-link">
            <Link to="/booking">Reservation</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Order Online</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Login</Link>
          </li>
          <li className="nav-link-icon">
            <img alt="basket" src="/basket .svg" />
          </li>
        </ul>
      </nav>
    </section>
  );
};
