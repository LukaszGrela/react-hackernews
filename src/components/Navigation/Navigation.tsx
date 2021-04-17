import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Paths } from "../AppRouter/AppRouter";
import { pathBuilder } from "../AppRouter/utils";

import "./styles/index.scss";

const Navigation: React.FC = (): JSX.Element => {
  return (
    <div className="Navigation">
      <nav>
        <span className="Navigation_logo">
          <Link to={pathBuilder(Paths.HOME, [{ key: "tag" }], true)}>
            Hacker News
          </Link>
        </span>
        <NavLink
          activeClassName="link-active"
          to={pathBuilder(Paths.HOME, [{ key: "tag", value: "new" }])}
        >
          new
        </NavLink>
        <NavLink
          activeClassName="link-active"
          to={pathBuilder(Paths.HOME, [{ key: "tag", value: "show" }])}
        >
          show
        </NavLink>
        <NavLink
          activeClassName="link-active"
          to={pathBuilder(Paths.HOME, [{ key: "tag", value: "ask" }])}
        >
          ask
        </NavLink>
        <NavLink
          activeClassName="link-active"
          to={pathBuilder(Paths.HOME, [{ key: "tag", value: "job" }])}
        >
          jobs
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
