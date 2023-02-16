import React from "react";
import "./Layoutother.css";
import Profile from "../../../assets/profile.png";

const Layoutother = () => {
  return (
    <div>
      <div className="flexbox other">
        <div className="search_box">
          <i class="bx bx-search-alt-2"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className="profile_view">
          <h5>Profile Analytics</h5>
          <div>1</div>
          <p>
            <b>People visited</b> your profile in last 30 days.
          </p>
        </div>
        <div className="profile_view">
          <div>
            <h5>People on ModernConnect</h5>
          </div>
          <div className="account_user">
            <div className="account">
              <img src={Profile} alt="" />
              <button>View</button>
            </div>
            <div className="account_about">
              <div className="account_name">Pruthviraj Auti</div>
              <div className="account_designation">
                Frontend developer at modernConnect at PES Modern College of
                Enginnering
              </div>
            </div>
          </div>
          <div className="account_user">
            <div className="account">
              <img src={Profile} alt="" />
              <button>View</button>
            </div>
            <div className="account_about">
              <div className="account_name">Sarvesh Joshi</div>
              <div className="account_designation">
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
