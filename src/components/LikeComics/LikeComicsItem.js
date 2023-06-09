import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import config from "~/config";
import Image from "~/components/Image";
import styles from "./LikeComics.module.scss";


const cx = classNames.bind(styles);

function LikeComicsItem() {
  return (
    <Link to={config.routes.author}>
        <div className={cx("author-item")}>
          <Image
            className={cx("avatar")}
            src=""
            alt="chuotbach"
          />
          <div className={cx("author-info")}>
            <p className={cx("name")}>Chuot Bach</p>
            <p className={cx("nickname")}>Chuotbach</p>
          </div>
        </div>
    </Link>
  );
}

export default LikeComicsItem;
