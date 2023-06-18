import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Login.module.scss";
import Button from "~/components/Button/Button";
import { EyePassword } from "~/components/Icons";
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <header className={cx("header")}>Đăng nhập</header>
        <p className={cx("title")}>Tài khoản</p>
        <div className={cx("form-group")}>
          <input
            type="email"
            className={cx("input-login")}
            placeholder="Tài khoản"
            required
          />
        </div>
        <p className={cx("title")}>Mật khẩu</p>
        <div className={cx("form-group")}>
          <input
            type={passwordShown ? "text" : "password"}
            className={cx("input-login")}
            id="Password"
            placeholder="Password"
            required
          />
          <button className={cx("icon-show")} onClick={togglePassword}>
            <EyePassword />
          </button>
        </div>
        <Button primary className={cx("btn-login")}>
          Đăng nhập
        </Button>
        <span className={cx("btn-register")}>
          <Link to={config.routes.register} >Chưa có tài khoản?</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
