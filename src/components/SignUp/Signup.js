import React, { useState } from "react";
import styles from "./Signup.module.css";
import Profile from "../../assets/8401.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [otpData, setOtpData] = useState({
    otp: "",
  });
  const [data, setData] = useState({
    full_name: "",
    user_name: "",
    password: "",
    email_address: "",
    account_type: "",
    gender: "",
    contact_number: "",
    about_yourself: "",
  });

  const handleRegister = async () => {
    setLoading(true);
    console.log("Hi");
    console.log(data);
    let res = await fetch(
      "https://modern-connect.onrender.com/api/v1/user/signup/",
      {
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      res = await res.json();
      localStorage.setItem("TOKEN", res.AUTHENTICATION_TOKEN);
      console.log(res);
      setModal(true);
      setLoading(false);
    } else {
      console.log(res);
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    console.log("Hello");
    console.log(otpData);
    setLoading(true);
    let response = await fetch(
      "https://modern-connect.onrender.com/api/v1/user/verify_email/",
      {
        method: "POST",
        body: JSON.stringify(otpData),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("TOKEN"),
        },
      }
    );
    if (response.ok) {
      response = await response.json();
      console.log("Verify : ", response);
      dispatch(login({ ...data }));
      setLoading(false);
      navigate("/profile");
    } else {
      console.log(response);
      setLoading(false);
    }
  };

  return (
    <div className={styles.signup_page}>
      <div className={styles.form_div}>
        <div className={styles.basicInfo}>
          <div className={styles.inputbasics}>
            <div className={styles.basicInfo_heading}>Signup Details</div>
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
                    Full Name <span>*</span>
                  </div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setData({ ...data, full_name: e.target.value })
                    }
                    value={data.full_name}
                  />
                </div>
                <div className={styles.name}>
                  <div className={styles.name_label}>
                    Username <span>*</span>
                  </div>
                  <input
                    type="text"
                    value={data.user_name}
                    onChange={(e) =>
                      setData({ ...data, user_name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className={styles.website_details}>
                <div className={styles.name}>
                  <div className={styles.name_label}>
                    Email Address <span>*</span>
                  </div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setData({ ...data, email_address: e.target.value })
                    }
                    value={data.email_address}
                  />
                </div>
              </div>
              <div className={styles.user_bio}>
                <div className={styles.name_label}>
                  Brief Bio <span>*</span>
                </div>
                <textarea
                  name=""
                  id=""
                  cols="40"
                  rows="5"
                  onChange={(e) =>
                    setData({ ...data, about_yourself: e.target.value })
                  }
                  value={data.about_yourself}
                ></textarea>
              </div>
              <div className={styles.bio_description}>
                This is the very first thing peers read about you after your
                name. Be a little descriptive 🤙
              </div>
              <div className={styles.location_details}>
                <div className={styles.name}>
                  <div className={styles.name_label}>
                    Contact Number <span>*</span>
                  </div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setData({ ...data, contact_number: e.target.value })
                    }
                    value={data.contact_number}
                  />
                </div>
                <div className={styles.name}>
                  <div className={styles.name_label}>Account Type</div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setData({ ...data, account_type: e.target.value })
                    }
                    value={data.account_type}
                  />
                </div>

                <div className={styles.name} style={{ width: "45px" }}>
                  <div className={styles.name_label}>Gender</div>
                  <input
                    type="text"
                    style={{ width: "40px" }}
                    onChange={(e) =>
                      setData({ ...data, gender: e.target.value })
                    }
                    value={data.gender}
                  />
                </div>
              </div>
              <div className={styles.website_details}>
                <div className={styles.name}>
                  <div className={styles.name_label}>
                    Password <span>*</span>
                  </div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    value={data.password}
                  />
                </div>
              </div>
              <div className={styles.button_div}>
                <button className={styles.save_button} onClick={handleRegister}>
                  Save
                  {loading && <div className={styles.loader}></div>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image_div}>
        <img src={Profile} alt="" />
      </div>
      {modal && (
        <div className={styles.modal_container}>
          <div>
            <h4>OTP has been sent to your registerd Email Address </h4>
          </div>
          <div className={styles.website_details}>
            <div className={styles.name}>
              <div className={styles.name_label}>
                OTP <span>*</span>
              </div>
              <input
                type="text"
                onChange={(e) =>
                  setOtpData({ ...otpData, otp: e.target.value })
                }
                value={otpData.otp}
              />
            </div>
          </div>
          <div className={styles.button_div}>
            <button className={styles.save_button} onClick={handleVerify}>
              Save
              {loading && <div className={styles.loader}></div>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
