import PropTypes from 'prop-types'
import classNames from "classnames/bind";

import LikeComicsItem from "./LikeComicsItem";
import styles from "./LikeComics.module.scss";

const cx = classNames.bind(styles);

function LikeComics({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      <LikeComicsItem />
      <LikeComicsItem />
      <LikeComicsItem />
      <LikeComicsItem />
      <LikeComicsItem />
    </div>
  );
}

LikeComics.propTypes ={
  label: PropTypes.string
}

export default LikeComics;
