import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  children,
  className,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
  });

  return (
    <Comp className={classes} {...props}>
        <span className={cx("tittle")}>{children}</span>
    </Comp>
  );
}

// propTypes
Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default Button;
