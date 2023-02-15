import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <nav className="nav_menu">
        <div className="nav_heading">ModernConnect</div>
        <div className="nav_login">
          <div className="login">Login</div>
          <div className="signup">Signup</div>
        </div>
      </nav>
    </div>
  );
};
