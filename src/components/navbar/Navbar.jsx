import "./Navbar.css";
import logo from "../../assets/Logo (1).svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-wr">
        <img src={logo} alt="" />
        <input type="text" placeholder="Search" />
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <a href="">About</a>
            </li>

            <li>
              <a href="">Contact us</a>
            </li>

            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
