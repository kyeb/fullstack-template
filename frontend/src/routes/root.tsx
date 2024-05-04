import * as React from "react";
import * as classes from "../styles/root.module.scss";
import logo from "../static/logo.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

// The root
const Root = () => {
  return (
    <div className={classes.root}>
      <Link to="/">
        <div className={classes.logoContainer}>
          <h1>TODO project name</h1>
        </div>
      </Link>
      <div className={classes.inner}>
        {/* The Outlet component renders the children inside */}
        <Outlet />
      </div>
    </div>
  );
};

export { Root };
