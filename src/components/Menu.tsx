import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <ul className="menu-container-responsive">
      <li className="nav-link-responsive">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link-responsive">
        <Link to="">About</Link>
      </li>
      <li className="nav-link-responsive">
        <Link to="/">Menu</Link>
      </li>
      <li className="nav-link-responsive">
        <Link to="/booking">Reservation</Link>
      </li>
      <li className="nav-link-responsive">
        <Link to="/">Order Online</Link>
      </li>
      <li className="nav-link-responsive">
        <Link to="/">Login</Link>
      </li>
    </ul>
  );
};
