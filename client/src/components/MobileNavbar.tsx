import { AiOutlineHome, AiOutlineMessage, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsBriefcase, BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import MobileNavItems from "../constants/MobileNavItems";
import "../styles/MobileNavbar.css";
import { MobileIconComponentsItem } from "../types/FileTypes";

const iconComponents: MobileIconComponentsItem = {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  BsBriefcase,
  BsPencilSquare,
  AiOutlineMessage,
};

const MobileNavbar = () => {
  return (
    <div
      className="mobile-navbar"
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "var(--color-white)",
        padding: "0.5rem 1rem",
        boxShadow: "0px -2px 10px #dedede",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        {MobileNavItems.map((item, index: number) => {
          const IconComponent = iconComponents[item.icon];
          return (
            <div key={index}>
              <Link
                to={item.url}
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "1rem",
                  textDecoration: "none",
                  gap: "0.3rem",
                }}
              >
                <IconComponent style={{fontSize: "1.2rem", color: "var(--font-color-dark)"}}/>
                <p className="mobileNavItem-label" style={{ fontSize: "0.7rem" }}>{item.label}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar;
