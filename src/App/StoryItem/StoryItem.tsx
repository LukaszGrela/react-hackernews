import React from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../components/AppRouter/AppRouter";
import { pathBuilder } from "../../components/AppRouter/utils";
import { IHNStory } from "../../store/stories/types";

import "./styles/index.scss";

export interface IProps {
  element?: string;
  story: IHNStory;
}

const StoryItem: React.FC<IProps> = ({ story, element }: IProps): JSX.Element => {

  return React.createElement(
    element || 'li',
    {
      className: 'StoryItem'
    },
    <>
      {story.url && (
        <>
          <a href={story.url}>{story.title}</a>
          <small className="light">
            (
          <a href={story.url} rel="noopener noreferrer" target="_blank" >
              {story.domain || story.url}
            </a>
          )
        </small>
        </>
      )}
      <div className="subtext light">
        {story.type !== "job" && (
          <>
            {!Number.isNaN(story.points) && (
              <>
                {`${story.points} points`}
                {story.user && " by "}
              </>
            )}
            {story.user && (
              <>
                <Link
                  to={pathBuilder(Paths.USER, [
                    { key: "id", value: story.user },
                  ])}
                >
                  {story.user}
                </Link>
              </>
            )}
            {story.time_ago && (
              <>
                {" | "}
                <Link
                  to={pathBuilder(Paths.ITEM, [{ key: "id", value: story.id }])}
                >
                  {story.time_ago}
                </Link>
              </>
            )}
          </>
        )}
        {story.type === "job" && (
          <>
            {story.time_ago && (
              <Link
                to={pathBuilder(Paths.ITEM, [{ key: "id", value: story.id }])}
              >
                {story.time_ago}
              </Link>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default StoryItem;
