import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { LogoWeb } from "~/components/Icons";
import Search from "~/layouts/components/Search";
import Button from "~/components/Button";
import config from "~/config";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} onClick={() => window.location.reload()}>
          <FontAwesomeIcon icon={faBars} className={cx("menu-icon")} />
          <LogoWeb />
        </Link>

        <Search />

        <div className={cx("actions")}>
          <Button outline>Đăng ký</Button>
          <Button primary>Đăng nhập</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
