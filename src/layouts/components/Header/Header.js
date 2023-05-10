import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import { LogoWeb, MenuIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <FontAwesomeIcon icon={faBars } className={cx("menu-icon")} />
        <LogoWeb/>
      </div>
    </header>
  );
}

export default Header;
