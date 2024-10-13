import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-title">
          <div className="logo-container">
            <img src={LOGO_URL} />
          </div>
          <div className="title">
            <h2>Delishio</h2>
          </div>
        </div>
        <div className="nav-items">
          <ul>
            <li ><Link to="/"> Home</Link></li>
            <li><Link to ="/about">About Us</Link> </li>
            <li><Link to ="/contact">Contact Us</Link> </li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;