import React from "react";
import { IHNStory } from "../../store/stories/types";

import "./styles/index.scss";

export interface IProps {
  story: IHNStory;
}

const StoryItem: React.FC<IProps> = ({ story }: IProps): JSX.Element => {
  return (
    <li className="StoryItem">
      {story.url && (
        <>
          <a href={story.url}>{story.title}</a>
          <small className="light">
            (
            <a href={story.url} rel="noopener noreferrer">
              {story.domain || story.url}
            </a>
            )
          </small>
        </>
      )}
      {story.type !== "job" && (
        <>{!Number.isNaN(story.points) && `${story.points} points by `}</>
      )}
    </li>
  );
};

export default StoryItem;
