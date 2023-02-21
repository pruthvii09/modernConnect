import React from "react";
import styles from "./Layout.module.css";
import Layoutnav from "./LayoutNav/Layoutnav";
import Layoutfeed from "./LayoutFeed/Layoutfeed";
import Layoutother from "./LayoutOther/Layoutother";

const Layout = () => {
  return (
    <div className={styles.layout_menu}>
      <Layoutnav />

      <Layoutfeed />
      <Layoutother />
    </div>
  );
};

export default Layout;
