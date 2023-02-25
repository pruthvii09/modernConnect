import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav_menu}>
        <div className={styles.nav_heading} style={{ marginLeft: "90px" }}>
          ModernConnect
        </div>
        <div className={styles.nav_login}>
          <Link to={"/signup"}>
            <div className={styles.signup}>Signup</div>
          </Link>
          <Link to={"/login"}>
            <div className={styles.login}>Login</div>
          </Link>
        </div>
      </nav>
    </div>
  );
};
