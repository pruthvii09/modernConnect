import React from "react";
import { Link } from "react-router-dom";
import "./Layoutnav.css";

const Layoutnav = () => {
  return (
    <div>
      <div className="flexbox navigate">
        <Link to="/feed">
          <div className="nav_link">
            <i className="bx bx-home-alt"></i>
            <span>Scroll</span>
          </div>
        </Link>
        <Link>
          <div className="nav_link">
            <i className="bx bxs-inbox"></i>
            <span>Inbox</span>
          </div>
        </Link>
        <Link to="/jobs">
          <div className="nav_link">
            <i className="bx bxs-briefcase"></i>
            <span>Jobs</span>
          </div>
        </Link>
        <Link to="/find">
          <div className="nav_link">
            <i className="bx bx-search-alt-2"></i>
            <span>Find</span>
          </div>
        </Link>
        <Link to="/network">
          <div className="nav_link">
            <i className="bx bx-network-chart"></i>
            <span>Network</span>
          </div>
        </Link>
        <Link to="/profile">
          <div className="nav_link">
            <i className="bx bx-user"></i>
            <span>Profile</span>
          </div>
        </Link>
        <div className="verify_user">
          <div className="verify_img">
            <i class="bx bx-check-circle"></i>
            <span>Verified Profile</span>
          </div>
          <div className="verify_p">
            Get your verified ModernConnect profile by simply verifying your
            education.
          </div>
          <div className="btn">
            <button>Get Verified</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layoutnav;
