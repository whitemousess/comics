import { useState , useEffect } from "react";
import classNames from "classnames/bind";

import config from "~/config";
import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";
import {
  HomeIcon,
  HomeActiveIcon,
  LikeIcon,
  TrendingIcon,
  LikeActiveIcon,
  TrendingActiveIcon,
  WatchedIcon,
  WatchedActiveIcon,
} from "~/components/Icons";
import * as userService from "~/services/userService";
import Author from "~/components/Author";
import LikeComics from "~/components/LikeComics";

const cx = classNames.bind(styles);

function Sidebar() {
  const [author, setAuthor] = useState([]);
  const currentUser = true;

  useEffect(() => {
    // call Api User
    userService
    .getSuggested({ page: 1, perPage: 5 })
    .then((data) => {
      setAuthor((preUser) => [...preUser, ...data]);
    })
    .catch((error) => console.log(error));
}, []);

  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="Trang chủ"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
      </Menu>
      <Menu>
        <MenuItem
          title="Yêu thích"
          to={config.routes.likes}
          icon={<LikeIcon />}
          activeIcon={<LikeActiveIcon />}
        />
      </Menu>
      <Menu>
        <MenuItem
          title="Thịnh hành"
          to={config.routes.trending}
          icon={<TrendingIcon />}
          activeIcon={<TrendingActiveIcon />}
        />
      </Menu>
      <Menu>
        <MenuItem
          title="Đã xem"
          to={config.routes.watched}
          icon={<WatchedIcon />}
          activeIcon={<WatchedActiveIcon />}
        />
      </Menu>
      
      <Author label="Tác giả" data={author}/>

      {currentUser && <LikeComics label="Theo dõi"/>}

      <p className={cx("copyright")}>© 2023</p>
    </aside>
  );
}

export default Sidebar;
