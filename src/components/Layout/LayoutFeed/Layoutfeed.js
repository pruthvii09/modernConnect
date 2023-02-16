import React, { useState } from "react";
import Profile from "../../../assets/profile.png";
import Profile2 from "../../../assets/profile2.png";
import Idea from "../../../assets/idea.png";
import Hand from "../../../assets/agreement.png";
import Trophy from "../../../assets/trophy.png";
import "./Layoutfeed.css";

const Layoutfeed = () => {
  const [commentshow, setCommentShow] = useState(false);
  const [post, setPost] = useState(false);
  const [PostType, setPostType] = useState("Idea");
  return (
    <div>
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
    </div>
  );
};

export default Layoutfeed;
