import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import StoryItem from "../../App/StoryItem/StoryItem";
import { TDispatch } from "../../store";
import { TStateObject } from "../../store/createRootReducer";
import { getStory } from "../../store/stories/actions";
import { IStoriesReducer } from "../../store/stories/types";
import { TTags } from "./types";

import "./styles/index.scss";

export interface IProps {}

const Stories: React.FC<IProps> = (): JSX.Element => {
  const { tag = "top" } = useParams<{ tag?: TTags }>();
  const page: number | undefined = undefined;

  const dispatch = useDispatch<TDispatch>();
  const { loading, stories } = useSelector<TStateObject, IStoriesReducer>(
    (state) => ({
      loading: state.stories.loading,
      stories: state.stories.stories,
    })
  );

  useEffect((): (() => void) => {
    const controller = dispatch(
      getStory({
        story: tag,
        page,
      })
    );
    return (): void => {
      controller.abort();
    };
  }, [tag, page, dispatch]);
  return (
    <div className="Stories">
      <div className="Stories_wrapper">
        {!loading && stories.length > 0 && (
          <ul>
            {stories.map((story) => (
              <StoryItem key={story.id} story={story} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Stories;
