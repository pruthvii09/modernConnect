import React from "react";
import styles from "./Layoutother.module.css";
import Profile from "../../../assets/profile.png";

const Layoutother = () => {
  return (
    <div className={styles.main_other}>
      <div className={`${styles.flexbox} ${styles.other}`}>
        <div className={styles.search_box}>
          <i class="bx bx-search-alt-2"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.profile_view}>
          <h5>Profile Analytics</h5>
          <div>1</div>
          <p>
            <b>People visited</b> your profile in last 30 days.
          </p>
        </div>
        <div className={styles.profile_view}>
          <div>
            <h5>People on ModernConnect</h5>
          </div>
          <div className={styles.account_user}>
            <div className={styles.account}>
              <img src={Profile} alt="" />
              <button>View</button>
            </div>
            <div className={styles.account_about}>
              <div className={styles.account_name}>Pruthviraj Auti</div>
              <div className={styles.account_designation}>
                Frontend developer at modernConnect at PES Modern College of
                Enginnering
              </div>
            </div>
          </div>
          <div className={styles.account_user}>
            <div className={styles.account}>
              <img src={Profile} alt="" />
              <button>View</button>
            </div>
            <div className={styles.account_about}>
              <div className={styles.account_name}>Sarvesh Joshi</div>
              <div className={styles.account_designation}>
                Backend developer at RhytmFlows from SPPU Univesity, Pune
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layoutother;
