import React, { useState } from "react";
import styles from "./ProfileForm.module.css";
import Layoutnav from "../Layout/LayoutNav/Layoutnav";
import BasicProfile from "./ProfileSections/BasicProfile";
import ProjectAdd from "./ProjectAdd/ProjectAdd";

const ProfileForm = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleContact = () => {
    setShowContact(true);
    setShowPassword(false);
    setShowProfile(false);
    setShowProject(false);
  };
  const handleProfile = () => {
    setShowContact(false);
    setShowPassword(false);
    setShowProfile(true);
    setShowProject(false);
  };
  const handleProject = () => {
    setShowContact(false);
    setShowPassword(false);
    setShowProfile(false);
    setShowProject(true);
  };
  const handlePassword = () => {
    setShowContact(false);
    setShowPassword(true);
    setShowProfile(false);
    setShowProject(false);
  };

  return (
    <div className={styles.flexbox}>
      <div className={styles.profile_nav}>
        <Layoutnav />
      </div>
      <div className={styles.edit_section}>
        {showProfile && <BasicProfile />}
        {showContact && (
          <div>
            <div className={styles.basicInfo}>
              <div className={styles.inputbasics}>
                <div className={styles.basicInfo_heading}>
                  Contact Information
                </div>
                <div className={styles.input_basic_info}>
                  <div className={styles.input_container}>
                    <div className={styles.name}>
                      <div className={styles.name_label}>
                        Primary Email <span>*</span>
                      </div>
                      <input type="text" />
                    </div>
                    <div className={styles.name}>
                      <div className={styles.name_label}>Contact Number</div>
                      <input type="text" />
                    </div>
                  </div>
                  <button className={styles.save_button}>Save</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {showPassword && <div>injifv</div>}
        {showProject && <ProjectAdd />}
      </div>
      <div className={styles.edit_navigate}>
        <div
          className={
            showProfile
              ? `${styles.active_nav} ${styles.nav} ${styles.profile_edit_nav}`
              : `${styles.nav} ${styles.profile_edit_nav}`
          }
          onClick={handleProfile}
        >
          Profile
        </div>
        <div
          className={
            showContact
              ? `${styles.active_nav} ${styles.nav} ${styles.profile_edit_nav}`
              : `${styles.nav} ${styles.profile_edit_nav}`
          }
          onClick={handleContact}
        >
          Contact Info
        </div>
        <div
          className={
            showProject
              ? `${styles.active_nav} ${styles.nav} ${styles.profile_edit_nav}`
              : `${styles.nav} ${styles.profile_edit_nav}`
          }
          onClick={handleProject}
        >
          Add a Project
        </div>
        <div
          className={
            showPassword
              ? `${styles.active_nav} ${styles.nav} ${styles.profile_edit_nav}`
              : `${styles.nav} ${styles.profile_edit_nav}`
          }
          onClick={handlePassword}
        >
          Account Passwords
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
