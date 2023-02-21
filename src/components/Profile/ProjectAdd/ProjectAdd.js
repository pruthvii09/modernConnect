import React from "react";
import styles from "./ProjectAdd.module.css";

const ProjectAdd = () => {
  return (
    <div>
      <div className={styles.basicInfo}>
        <div className={styles.inputbasics}>
          <div className={styles.basicInfo_heading}>Project Details</div>
          <div className={styles.input_basic_info}>
            <div className={styles.input_container}>
              <div className={styles.project_input}>
                <div className={styles.project_name}>
                  <div>Project Name</div>
                  <div className={styles.name_label}>
                    Add project title in 60 characters or less.
                  </div>
                </div>
                <div className={styles.name}>
                  <div>
                    <div className={styles.name_label}>
                      Title <span>*</span>
                    </div>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className={styles.project_input}>
                <div className={styles.project_name}>
                  <div>
                    Tag Line <span>*</span>
                  </div>
                  <div className={styles.name_label}>
                    Add project title in 60 characters or less.
                  </div>
                </div>
                <div className={styles.name}>
                  <div className={styles.name_label}>
                    Tag Line <span>*</span>
                  </div>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.project_input}>
                <div className={styles.project_name}>
                  <div>
                    Project Link <span>*</span>
                  </div>
                  <div className={styles.name_label}>
                    It could be a link to demo, document, code repository, etc.
                  </div>
                </div>
                <div className={styles.name}>
                  <div className={styles.name_label}>
                    Project Link <span>*</span>
                  </div>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.project_input}>
                <div className={styles.project_name}>
                  <div>
                    Project Link <span>*</span>
                  </div>
                  <div className={styles.name_label}>
                    It could be a link to demo, document, code repository, etc.
                  </div>
                </div>
                <div className={styles.name}>
                  <div className={styles.name_label}>
                    Project Link <span>*</span>
                  </div>
                  <input type="text" />
                </div>
              </div>
            </div>
            <button className={styles.save_button}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAdd;
