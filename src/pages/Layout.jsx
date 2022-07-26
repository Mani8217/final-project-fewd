import { Outlet, Link } from "react-router-dom";
import "./Persian.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/persian">Persian</Link>
          </li>
          <li>
            <Link to="/british">British</Link>
          </li>
          <li>
            <Link to="/form">Register</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
