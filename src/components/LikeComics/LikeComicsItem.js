import classNames from "classnames/bind";

import styles from "./LikeComics.module.scss";
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles);

function LikeComicsItem() {
  return (
    <Link to={config.routes.author}>
        <div className={cx("author-item")}>
          <img
            className={cx("avatar")}
            src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/335264727_1949622308715153_9016707167560481744_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=btzA7SVYHb4AX-9v3B8&_nc_ht=scontent.fhan18-1.fna&oh=00_AfBXSwIzqbzBHt7fcmHKHqJGUIMKi7km0D1ryN764MOZ1Q&oe=6463BBC0"
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
