import classNames from "classnames/bind";

import styles from "./Search.module.scss";
import { SearchIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Search() {
  return (
      <div className={cx("search")}>
        <input type="text" placeholder="Tìm Kiếm tác giả và truyện" />

        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
  );
}

export default Search;
