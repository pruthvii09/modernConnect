import React, { useState } from "react";
import Profile from "../../assets/profile.png";
import Profile2 from "../../assets/profile2.png";
import Idea from "../../assets/idea.png";
import Hand from "../../assets/agreement.png";
import Trophy from "../../assets/trophy.png";
import "./Layout.css";

const Layout = () => {
  const [commentshow, setCommentShow] = useState(false);
  const [post, setPost] = useState(true);
  const [PostType, setPostType] = useState("Idea");
  return (
    <div className="layout_menu">
      <div className="flexbox navigate">
        <div className="nav_link">
          <i className="bx bx-home-alt"></i>
          <span>Scroll</span>
        </div>
        <div className="nav_link">
          <i className="bx bxs-inbox"></i>
          <span>Inbox</span>
        </div>
        <div className="nav_link">
          <i className="bx bxs-briefcase"></i>
          <span>Jobs</span>
        </div>
        <div className="nav_link">
          <i className="bx bx-search-alt-2"></i>
          <span>Find</span>
        </div>
        <div className="nav_link">
          <i className="bx bx-network-chart"></i>
          <span>Network</span>
        </div>
        <div className="nav_link">
          <i className="bx bx-user"></i>
          <span>Profile</span>
        </div>
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
      <div className="flexbox feed">
        <div className="post_input">
          <div className="user_image">
            <img src={Profile2} alt="" />
          </div>
          <div className="post_fields">
            <div
              className="post_about"
              onClick={() => {
                setPost(!post);
              }}
            >
              {PostType}
              <i class="bx bx-chevron-down"></i>
            </div>
            {post && (
              <div className="modal">
                <div className="select_post">Select Type of Post</div>
                <div className="post_types">
                  <div className="post_flex">
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
                  <div className="post_flex">
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
                  <div className="post_flex">
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
            <button className="post_button">Post</button>
          </div>
        </div>
        <div className="map_div">
          <div className="user_info">
            <img src={Profile} alt="" />
            <div className="user">
              <h6 className="username">pruthvii__</h6>
              <span>12h</span>
            </div>
          </div>
          <div className="post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptatum, exercitationem unde blanditiis vel, beatae repellendus
            tenetur pariatur nemo sapiente odit natus ea similique! Explicabo
            <div className="share_section">
              <div
                className="comment"
                onClick={() => {
                  setCommentShow(!commentshow);
                }}
              >
                <i class="bx bx-comment"></i>
                <p>1</p>
              </div>

              <div className="upvote">
                <i class="bx bx-up-arrow-alt"></i>
                <p>1</p>
              </div>
              <div className="share">
                <i class="bx bxs-share-alt"></i>
              </div>
            </div>
            {commentshow && (
              <div className="comment_section">
                <div className="input_comment">
                  <input type="text" placeholder="Share Your Thoughts !!" />
                  <i class="bx bx-send"></i>
                </div>
                <div className="all_comments">
                  <div className="comment_map">
                    <div className="picture">
                      <img src={Profile2} alt="" />
                      <span>pratikshaa__</span>
                    </div>
                    <div className="main_comment">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni quasi deleniti molestias officiis rerum, voluptas
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="map_div">
          <div className="user_info">
            <img src={Profile} alt="" />
            <div className="user">
              <h6 className="username">anas_chaud</h6>
              <span>12h</span>
            </div>
          </div>
          <div className="post">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptatum, exercitationem unde blanditiis vel, beatae repellendus
            tenetur pariatur nemo sapiente odit natus ea similique! Explicabo,
            quia ullam ab laudantium pariatur eos praesentium beatae odio
            inventore expedita, veniam nisi! Accusamus maxime eaque similique
            <div className="share_section">
              <div className="comment">
                <i class="bx bx-comment"></i>
                <p>1</p>
              </div>
              <div className="upvote">
                <i class="bx bx-up-arrow-alt"></i>
                <p>1</p>
              </div>
              <div className="share">
                <i class="bx bxs-share-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default Layout;
