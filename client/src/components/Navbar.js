import { Link } from "react-router-dom";
import logo from "phase-4-flask-api-code-challenge-pizza-restaurants-client/src/logo.png";

function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Pizza logo" />
        <h1>The Pizza Society</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Navbar;
