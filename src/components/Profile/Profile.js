import React from "react";
import "./Profile.css";
import LayoutNav from "../Layout/LayoutNav/Layoutnav";
const Profile = () => {
  return (
    <div className="profile_page">
      <div className="profile_nav">
        <LayoutNav />
      </div>
      <div className="main_profie">This is Profile</div>
    </div>
  );
};

export default Profile;
