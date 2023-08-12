import { Link } from "react-router-dom";
import navItems from "../constants/NavItems";
import "../styles/MobileNavbar.css";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 2px 10px #dedede",
        padding: "0.5rem 2rem",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "1080px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              // fontSize: "1.5rem",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            {/* Sayan */}
            <img
              src="https://ik.imagekit.io/sayancr777/Portfolio/sayanLogo.jpg?updatedAt=1691434937632"
              alt="logo"
              height={40}
            />
          </Link>
        </div>
        <div style={{ display: "flex" }}>
          {navItems.map((item, index) => {
            return (
              <Link
                to={item.url}
                key={index}
                style={{
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  color: "var(--font-color-dark)",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  padding: "0.5rem 1rem",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
