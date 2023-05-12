import PropTypes from 'prop-types'

import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Author.module.scss";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AuthorItem({data}) {
  return (

    <Link to={`/@${data.nickname}`}>
        <div className={cx("author-item")}>
          <Image
            className={cx("avatar")}
            src={data.avatar}
            alt={data.nickname}
          />
          <div className={cx("author-info")}>
            <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
            <p className={cx("nickname")}>{data.nickname}</p>
          </div>
        </div>
    </Link>
  );
}

AuthorItem.propTypes = {
  data: PropTypes.object.isRequired,
}


export default AuthorItem;
