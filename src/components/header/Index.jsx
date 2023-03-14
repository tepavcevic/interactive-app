import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h3>Form + Router App</h3>
      <nav className="app-nav">
        <Link className="nav-link" to="/">
          HOME
        </Link>
      </nav>
    </header>
  );
}
