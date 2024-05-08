import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <section className="nav-container">
      <nav className="nav-menu">
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
          <li className="nav-link">
            <Link to="/">
              <img src="/basket .svg" />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
