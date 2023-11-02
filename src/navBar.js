import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/game">
        Play game
      </NavLink>
      <NavLink to="/scoreboard" >
        Scoreboard
      </NavLink>
    </nav>
  );
}
