import classNames from "classnames/bind";

import styles from "./Comics.modulle.scss";
import ComicItem from "./ComicItem"

const cx = classNames.bind(styles);

function Comics() {
    return ( <div className={cx("wrapper")}>
        <ComicItem />
        <ComicItem />
        <ComicItem />
        <ComicItem />
        <ComicItem />
        <ComicItem />
        <ComicItem />
        <ComicItem />
        <ComicItem />
        <ComicItem />
        <ComicItem />
    </div> );
}

export default Comics;