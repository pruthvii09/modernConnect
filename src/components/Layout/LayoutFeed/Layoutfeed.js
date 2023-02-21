import React, { useState } from "react";
import Profile from "../../../assets/profile.png";
import Profile2 from "../../../assets/profile2.png";
import Idea from "../../../assets/idea.png";
import Hand from "../../../assets/agreement.png";
import Trophy from "../../../assets/trophy.png";
import styles from "./Layoutfeed.module.css";

const Layoutfeed = () => {
  const [commentshow, setCommentShow] = useState(false);
  const [post, setPost] = useState(false);
  const [PostType, setPostType] = useState("Idea");
  return (
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
            <img src={Profile} alt="" />
            <div className={styles.user}>
              <h6 className={styles.username}>pruthvii__</h6>
              <span>12h</span>
            </div>
          </div>
          <div className={styles.post}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptatum, exercitationem unde blanditiis vel, beatae repellendus
            tenetur pariatur nemo sapiente odit natus ea similique! Explicabo
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
                  <input type="text" placeholder="Share Your Thoughts !!" />
                  <i class="bx bx-send"></i>
                </div>
                <div className={styles.all_comments}>
                  <div className={styles.comment_map}>
                    <div className={styles.picture}>
                      <img src={Profile2} alt="" />
                      <span>pratikshaa__</span>
                    </div>
                    <div className={styles.main_comment}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni quasi deleniti molestias officiis rerum, voluptas
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptatum, exercitationem unde blanditiis vel, beatae repellendus
            tenetur pariatur nemo sapiente odit natus ea similique! Explicabo
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
                  <input type="text" placeholder="Share Your Thoughts !!" />
                  <i class="bx bx-send"></i>
                </div>
                <div className={styles.all_comments}>
                  <div className={styles.comment_map}>
                    <div className={styles.picture}>
                      <img src={Profile2} alt="" />
                      <span>pratikshaa__</span>
                    </div>
                    <div className={styles.main_comment}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni quasi deleniti molestias officiis rerum, voluptas
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layoutfeed;
