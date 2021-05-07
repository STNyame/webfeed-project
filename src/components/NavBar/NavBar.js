import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="body">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/feed">
        Feed
      </NavLink>
      <NavLink className="nav-link" to="/details">
        Details
      </NavLink>
    </div>
  );
}
