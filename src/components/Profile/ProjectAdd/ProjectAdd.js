import React, { useState } from "react";
import styles from "./ProjectAdd.module.css";

const ProjectAdd = () => {
  const [data, setData] = useState({
    project_title: "",
    project_headline: "",
    project_link: "",
    project_description: "",

    // user_id: "4b456b61-d525-4cca-b59c-0a491cfec16a",
  });
  const [loading, setLoading] = useState(false);
  const handleProjectAdd = async () => {
    setLoading(true);
    let projects = {
      projects: [data],
    };
    console.log(projects);
    let response = await fetch(
      "https://modern-connect.onrender.com/api/v1/user/add/project_details/",
      {
        method: "POST",
        body: projects,
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          Authorization: "Token " + localStorage.getItem("TOKEN"),
        },
      }
    );
    console.log(projects);
    response = await response.json();
    if (response.ok) {
      console.log(response);
      setLoading(false);
    }
    if (!response.ok) {
      console.log("Error", response);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className={styles.basicInfo}>
        <div className={styles.inputbasics}>
          <div className={styles.basicInfo_heading}>Project Details</div>
          <div className={styles.input_basic_info}>
            <div className={styles.input_container}>
              <div className={styles.project_input}>
                <div className={styles.project_name}>
                  <div>
                    Project Name <span>*</span>
                  </div>
                  <div className={styles.name_label}>
                    Add project title in 60 characters or less.
                  </div>
                </div>
                <div className={styles.name}>
                  <div>
                    <div className={styles.name_label}>
                      Title <span>*</span>
                    </div>
                    <input
                      type="text"
                      onChange={(e) => {
                        setData({ ...data, project_title: e.target.value });
                      }}
                      value={data.project_title}
                    />
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
                  <input
                    type="text"
                    onChange={(e) => {
                      setData({ ...data, project_headline: e.target.value });
                    }}
                    value={data.project_headline}
                  />
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
                  <input
                    type="text"
                    onChange={(e) => {
                      setData({ ...data, project_link: e.target.value });
                    }}
                    value={data.project_link}
                  />
                </div>
              </div>
              <div className={styles.project_input}>
                <div className={styles.project_name}>
                  <div className={styles.project_name_div}>
                    Description <span>*</span>
                  </div>
                  <div className={styles.name_label}>
                    It could be a link to demo, document, code repository, etc.
                  </div>
                </div>
                <div className={styles.name}>
                  <div className={styles.name_label}>
                    Project Description <span>*</span>
                  </div>
                  <textarea
                    name=""
                    id=""
                    cols="34"
                    rows="8"
                    onChange={(e) => {
                      setData({ ...data, project_description: e.target.value });
                    }}
                    value={data.project_description}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className={styles.button_div}>
              <button className={styles.save_button} onClick={handleProjectAdd}>
                Save
                {loading && <div className={styles.loader}></div>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAdd;
