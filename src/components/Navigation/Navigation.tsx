import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Paths } from "../AppRouter/AppRouter";
import { pathBuilder } from "../AppRouter/utils";

const Navigation: React.FC = (): JSX.Element => {
  return (
    <div className="Navigation">
      <nav>
        <span className="Navigation_logo">
          <Link to={pathBuilder(Paths.HOME, [{ key: "tag" }], true)}>
            Hacker News
          </Link>
        </span>
        <NavLink to={pathBuilder(Paths.HOME, [{ key: "tag", value: "new" }])}>
          new
        </NavLink>
        <NavLink to={pathBuilder(Paths.HOME, [{ key: "tag", value: "show" }])}>
          show
        </NavLink>
        <NavLink to={pathBuilder(Paths.HOME, [{ key: "tag", value: "ask" }])}>
          ask
        </NavLink>
        <NavLink to={pathBuilder(Paths.HOME, [{ key: "tag", value: "jobs" }])}>
          jobs
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
