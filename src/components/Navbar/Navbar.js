import React from "react";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav_menu}>
        <div className={styles.nav_heading}>ModernConnect</div>
        <div className={styles.nav_login}>
          <div className={styles.login}>Login</div>
          <div className={styles.signup}>Signup</div>
        </div>
      </nav>
    </div>
  );
};
