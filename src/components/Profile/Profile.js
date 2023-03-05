import React, { useState } from "react";
import ProfileImg from "../../assets/profile.png";
import styles from "./Profile.module.css";
import LayoutNav from "../Layout/LayoutNav/Layoutnav";
import Profile3 from "../../assets/profile.png";
import Profile2 from "../../assets/profile.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state.user.userData);

  const [modal, setModal] = useState(false);
  const [commentshow, setCommentShow] = useState(false);
  return (
    <div className={styles.profile_page}>
      <div className={styles.profile_nav}>
        <LayoutNav />
      </div>
      <div className={styles.main_profile_page}>
        <div className={styles.main_profile}>
          <div>
            <div className={styles.username_edit}>
              <h1>{user.full_name}</h1>
              <Link to="/profile/edit">
                <button>Edit Profile</button>
              </Link>
            </div>
            <p>{user.about_yourself}</p>
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
          <div className={styles.user_post_div}>
            <div className={styles.user_special_post}>
              <div className={styles.feed_section}>
                <div className={`${styles.flexbox} ${styles.feed}`}>
                  {/* <div className={styles.post_input}>
          <div className={styles.user_image}>
            <img src={Profile2} alt="" />
          </div>
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
                <div className={styles.select_post}>Select Type of Post</div>
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
            <textarea
              cols="57"
              rows="2"
              placeholder="Write about your post here"
            ></textarea>
            <button className={styles.post_button}>Post</button>
          </div>
        </div> */}
                  <div className={styles.map_div}>
                    <div className={styles.user_info}>
                      <img src={Profile3} alt="" />
                      <div className={styles.user}>
                        <h6 className={styles.username}>pruthvii__</h6>
                        <span>12h</span>
                      </div>
                    </div>
                    <div className={styles.post}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae voluptatum, exercitationem unde blanditiis vel,
                      beatae repellendus tenetur pariatur nemo sapiente odit
                      natus ea similique! Explicabo
                      <div className={styles.share_section}>
                        <div
                          className={styles.comment}
                          onClick={() => {
                            setCommentShow(!commentshow);
                          }}
                        >
                          <i class="bx bx-comment"></i>
                          <p>1</p>
                        </div>

                        <div className={styles.upvote}>
                          <i class="bx bx-up-arrow-alt"></i>
                          <p>1</p>
                        </div>
                        <div className={styles.share}>
                          <i class="bx bxs-share-alt"></i>
                        </div>
                      </div>
                      {commentshow && (
                        <div className={styles.comment_section}>
                          <div className={styles.input_comment}>
                            <input
                              type="text"
                              placeholder="Share Your Thoughts !!"
                            />
                            <i class="bx bx-send"></i>
                          </div>
                          <div className={styles.all_comments}>
                            <div className={styles.comment_map}>
                              <div className={styles.picture}>
                                <img src={Profile2} alt="" />
                                <span>pratikshaa__</span>
                              </div>
                              <div className={styles.main_comment}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Magni quasi deleniti molestias
                                officiis rerum, voluptas
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.map_div}>
                    <div className={styles.user_info}>
                      <img src={Profile} alt="" />
                      <div className={styles.user}>
                        <h6 className={styles.username}>pruthvii__</h6>
                        <span>12h</span>
                      </div>
                    </div>
                    <div className={styles.post}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vitae voluptatum, exercitationem unde blanditiis vel,
                      beatae repellendus tenetur pariatur nemo sapiente odit
                      natus ea similique! Explicabo
                      <div className={styles.share_section}>
                        <div
                          className={styles.comment}
                          onClick={() => {
                            setCommentShow(!commentshow);
                          }}
                        >
                          <i class="bx bx-comment"></i>
                          <p>1</p>
                        </div>

                        <div className={styles.upvote}>
                          <i class="bx bx-up-arrow-alt"></i>
                          <p>1</p>
                        </div>
                        <div className={styles.share}>
                          <i class="bx bxs-share-alt"></i>
                        </div>
                      </div>
                      {commentshow && (
                        <div className={styles.comment_section}>
                          <div className={styles.input_comment}>
                            <input
                              type="text"
                              placeholder="Share Your Thoughts !!"
                            />
                            <i class="bx bx-send"></i>
                          </div>
                          <div className={styles.all_comments}>
                            <div className={styles.comment_map}>
                              <div className={styles.picture}>
                                <img src={Profile2} alt="" />
                                <span>pratikshaa__</span>
                              </div>
                              <div className={styles.main_comment}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Magni quasi deleniti molestias
                                officiis rerum, voluptas
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>other section</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
