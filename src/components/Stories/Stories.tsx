import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { TDispatch } from "../../store";
import { getStory } from "../../store/stories/actions";
import { IHNStory, THNItemType } from "../../store/stories/types";
import { stories, TTags } from "./types";

export interface IProps {}

const Stories: React.FC<IProps> = (): JSX.Element => {
  const { tag = "top" } = useParams<{ tag?: TTags }>();
  const page: number | undefined = undefined;

  const dispatch = useDispatch<TDispatch>();

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
    <div className="Stories">{`Now showing stories for ${stories[tag]}`}</div>
  );
};

export default Stories;
