import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import StoryItem from '../StoryItem/StoryItem';
import { IHNItem } from '../../model';
import { TDispatch } from '../../store';
import { TStateObject } from '../../store/createRootReducer';
import { getItem } from '../../store/item/actions';
import { stories } from '../Stories/types';
import "./styles/index.scss";

const Items: React.FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<TDispatch>();
  const { loading, story } = useSelector<TStateObject, { story?: IHNItem, loading: boolean }>(state => {
    return {
      story: state.stories.stories.find(s => `${s.id}` === id),
      loading: false
    }
  })
  useEffect((): (() => void) => {

    const controller = dispatch(getItem(id));

    return (): void => {
      controller.abort()
    }
  }, [id, dispatch]);

  return <div className="Items">
    <div className="Items_wrapper">
      {story && <StoryItem story={story} element={'div'} />}
    </div>
  </div>
}

export default Items;