import PropTypes from 'prop-types'
import classNames from "classnames/bind";

import AuthorItem from "./AuthorItem";
import styles from "./Author.module.scss";

const cx = classNames.bind(styles);

function Author({ label ,data =[]}) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      {data.map((author) => (
        <AuthorItem key={author.id} data={author}/>
      ))}      
    </div>
  );
}

Author.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array
}

export default Author;
