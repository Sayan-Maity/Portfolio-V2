import React from "react";

const MobileNavbar = () => {
  return (
    <div>
      <div
        className="mobile-navbar"
        style={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          backgroundColor: "yellow",
          padding: "0.5rem 1rem",
        }}
      >
        <h1>Below Navbar</h1>
      </div>
    </div>
  );
};

export default MobileNavbar;
