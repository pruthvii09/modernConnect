import React, { useState } from "react";
import styles from "./Login.module.css";

import Profile from "../../assets/8401.jpg";
import { useCookies } from "react-cookie";

const Login = () => {
  const [data, setData] = useState({
    user_name: "",
    password: "",
  });

  const [cookies, setCookie] = useCookies();

  const handleLogin = async () => {
    let res = await fetch(
      "https://modern-connect.onrender.com/api/v1/user/login/",
      {
        method: "POST",
        credentials: "include",
        withCredentials: true,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const headers = res.headers;
    console.log(...headers);
  };
  return (
    <div className={styles.main_login}>
      <div className={styles.login_div}>
        <div className={styles.basicInfo}>
          <div className={styles.inputbasics}>
            <div className={styles.basicInfo_heading}>Signup Details</div>
            <div className={styles.input_basic_info}>
              <div className={styles.input_container}>
                <div className={styles.name}>
                  <div className={styles.name_label}>
                    Username <span>*</span>
                  </div>
                  <input
                    type="text"
                    onChange={(e) =>
                      setData({ ...data, user_name: e.target.value })
                    }
                    value={data.user_name}
                  />
                </div>
                <div className={styles.name}>
                  <div className={styles.name_label}>
                    Password <span>*</span>
                  </div>
                  <input
                    type="text"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                </div>
              </div>
              <button className={styles.save_button} onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.image_div}>
        <img src={Profile} alt="" />
      </div>
    </div>
  );
};

export default Login;
