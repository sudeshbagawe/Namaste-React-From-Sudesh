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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;