import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import StoryItem from '../../App/StoryItem/StoryItem';
import { TStateObject } from '../../store/createRootReducer';
import { IHNStory } from '../../store/stories/types';
import { stories } from '../Stories/types';
import "./styles/index.scss";

const Items: React.FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { story } = useSelector<TStateObject, { story?: IHNStory }>(state => {
    return {
      story: state.stories.stories.find(s => `${s.id}` === id)
    }
  })
  useEffect((): (() => void) => {
    const path = `https://node-hnapi.herokuapp.com/item/${id}`;
    const result = fetch(path/* , { signal } */).then((r) => r.json()).then(j => {
      console.log(j); return j;
    });

    return (): void => { }
  }, [])
  return <div className="Items">
    <div className="Items_wrapper">
      {story && <StoryItem story={story} element={'div'} />}
    </div>
  </div>
}

export default Items;