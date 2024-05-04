import * as React from "react";
import * as classes from "../styles/homepage.module.scss";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <button onClick={() => navigate("/other")}>Some other page</button>
    </div>
  );
};

export { Homepage };
