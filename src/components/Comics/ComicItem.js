import classNames from "classnames/bind";

import styles from "./Comics.modulle.scss";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function ComicItem() {
    return ( <div className={cx("comic-item")}>
        <Image className={cx("comic-avatar")} src="" alt="" />
        <p className={cx("comic-name")}>Truyện 1</p>
    </div> );
}

export default ComicItem;