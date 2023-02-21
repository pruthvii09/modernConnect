import React, { useState } from "react";
import ProfileImg from "../../assets/profile.png";
import styles from "./Profile.module.css";
import LayoutNav from "../Layout/LayoutNav/Layoutnav";
import Layoutfeed from "../Layout/LayoutFeed/Layoutfeed";
import Idea from "../../assets/idea.png";
import Hand from "../../assets/agreement.png";
import Trophy from "../../assets/trophy.png";
import { Link } from "react-router-dom";
const Profile = () => {
  const [post, setPost] = useState(false);
  const [PostType, setPostType] = useState("Idea");
  const [modal, setModal] = useState(false);
  return (
    <div className={styles.profile_page}>
      <div className={styles.profile_nav}>
        <LayoutNav />
      </div>
      <div className={styles.peofile_page}>
        <div className={styles.main_profile}>
          <div>
            <div className={styles.username_edit}>
              <h1>Pruthviraj Auti</h1>
              <Link to="/profile/edit">
                <button>Edit Profile</button>
              </Link>
            </div>
            <p>Frontend Developer</p>
            <div className={styles.user_skills}>
              <div className={styles.skills}>HTML</div>
              <div className={styles.skills}>ReactJs</div>
              <div className={styles.skills}>Django</div>
            </div>
            <div className={styles.general_info}>
              <div
                className={`${styles.general_info_flexbox} ${styles.general_location}`}
              >
                <div className={styles.general_info_icon}>
                  <i class="bx bx-pin"></i>
                </div>
                <div className={styles.general_info_detail}>Pune,India</div>
              </div>
              <div
                className={`${styles.general_info_flexbox} ${styles.general_location}`}
              >
                <div className={styles.general_info_icon}>
                  <i class="bx bx-package"></i>
                </div>
                <div className={styles.general_info_detail}>Projects</div>
              </div>
              <div
                className={`${styles.general_info_flexbox} ${styles.general_location}`}
                onClick={() => {
                  setModal(!modal);
                }}
              >
                <div className={styles.general_info_icon}>
                  <i class="bx bx-chevron-down"></i>
                </div>
                <div className={styles.general_info_detail}>Social Links</div>
                {modal && (
                  <div className={styles.general_user_links}>
                    <ul className={styles.general_link}>
                      <li>
                        <i class="bx bxl-instagram"></i>
                        <div>Instagram</div>
                      </li>
                      <li>
                        <i class="bx bxl-github"></i>
                        <div>GitHub</div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.user_image}>
            <img src={ProfileImg} alt="" />
          </div>
        </div>
        <div className={styles.user_post}>
          <div className={styles.post}>
            <div className={styles.postHeading}>
              <div className={styles.main_heading}>All Posts</div>
              <div className={styles.sortpost}>
                <div className={styles.post_fields}>
                  <div
                    className={styles.post_about}
                    onClick={() => {
                      setPost(!post);
                    }}
                  >
                    {PostType}
                    <i class="bx bx-chevron-down"></i>
                  </div>
                  {post && (
                    <div className={styles.modal}>
                      <div className={styles.select_post}>
                        Select Type of Post
                      </div>
                      <div className={styles.post_types}>
                        <div className={styles.post_flex}>
                          <img src={Idea} alt="" />
                          <div
                            onClick={() => {
                              setPostType("Idea");
                              setPost(!post);
                            }}
                          >
                            Idea
                          </div>
                        </div>
                        <div className={styles.post_flex}>
                          <img src={Hand} alt="" />
                          <div
                            onClick={() => {
                              setPostType("Help");
                              setPost(!post);
                            }}
                          >
                            Help
                          </div>
                        </div>
                        <div className={styles.post_flex}>
                          <img src={Trophy} alt="" />
                          <div
                            onClick={() => {
                              setPostType("Achivement");
                              setPost(!post);
                            }}
                          >
                            Achivement
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.allPosts}>
              <Layoutfeed />
            </div>
          </div>
          <div className={styles.post_other}>
            <div className={styles.otherHeading}>Other Section</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
