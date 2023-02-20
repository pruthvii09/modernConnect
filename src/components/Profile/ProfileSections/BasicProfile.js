import React from "react";
import Profile from "../../../assets/profile.png";
import styles from "./BasicProfile.module.css";

const BasicProfile = () => {
  return (
    <div>
      <div className={styles.basicInfo}>
        <div className={styles.inputbasics}>
          <div className={styles.basicInfo_heading}>Basic Information</div>
          <div className={styles.input_basic_info}>
            <div className={styles.image_container}>
              <div className={styles.userImage}>
                <img src={Profile} alt="" />
              </div>
              <label>Upload Photo</label>
            </div>
            <div className={styles.input_container}>
              <div className={styles.name}>
                <div className={styles.name_label}>
                  First Name <span>*</span>
                </div>
                <input type="text" />
              </div>
              <div className={styles.name}>
                <div className={styles.name_label}>
                  Last Name <span>*</span>
                </div>
                <input type="text" />
              </div>
            </div>
            <div className={styles.user_bio}>
              <div className={styles.name_label}>
                Brief Bio <span>*</span>
              </div>
              <textarea name="" id="" cols="65" rows="5"></textarea>
            </div>
            <div className={styles.bio_description}>
              This is the very first thing peers read about you after your name.
              Be a little descriptive 🤙
            </div>
            <div className={styles.location_details}>
              <div className={styles.name}>
                <div className={styles.name_label}>Country</div>
                <input type="text" />
              </div>
              <div className={styles.name}>
                <div className={styles.name_label}>City</div>
                <input type="text" />
              </div>
            </div>
            <div className={styles.website_details}>
              <div className={styles.name}>
                <div className={styles.name_label}>Website</div>
                <input type="text" />
              </div>
            </div>
            <button className={styles.save_button}>Save</button>
          </div>
        </div>
      </div>
      <div className={styles.tagInfo}>
        <div className={styles.inputbasics}>
          <div className={styles.basicInfo_heading}>Profile Tags</div>
          <div className={styles.input_basic_info}>
            <div className={styles.input_container}>
              <div className={styles.name}>
                <div className={styles.name_label}>Search for skills</div>
                <input type="text" />
              </div>
            </div>
            <div className={styles.bio_description}>Add minimum 3 skills</div>
            <button className={styles.save_button}>Save</button>
          </div>
        </div>
      </div>

      <div className={styles.socialInfo}>
        <div className={styles.inputbasics}>
          <div className={styles.basicInfo_heading}>Social Links</div>
          <div className={styles.input_basic_info}>
            <div
              className={`${styles.social_input_container} ${styles.social_link_input}`}
            >
              <div className={styles.social_link}>
                <div className={styles.symbol}>
                  <i class="bx bxl-twitter"></i>
                </div>
                <input type="text" />
              </div>
              <div className={styles.social_link}>
                <div className={styles.symbol}>
                  <i class="bx bxl-github"></i>
                </div>
                <input type="text" />
              </div>
            </div>
            <div
              className={`${styles.social_input_container} ${styles.social_link_input}`}
            >
              <div className={styles.social_link}>
                <div className={styles.symbol}>
                  <i class="bx bxl-linkedin-square"></i>
                </div>
                <input type="text" />
              </div>
              <div className={styles.social_link}>
                <div className={styles.symbol}>
                  <i class="bx bxl-figma"></i>
                </div>
                <input type="text" />
              </div>
            </div>
            <div
              className={`${styles.social_input_container} ${styles.social_link_input}`}
            >
              <div className={styles.social_link}>
                <div className={styles.symbol}>
                  <i class="bx bxl-codepen"></i>
                </div>
                <input type="text" />
              </div>
              <div className={styles.social_link}>
                <div className={styles.symbol}>
                  <i class="bx bxl-instagram-alt"></i>
                </div>
                <input type="text" />
              </div>
            </div>
            <button className={styles.save_button}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicProfile;
