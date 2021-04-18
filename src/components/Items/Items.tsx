import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import StoryItem from '../StoryItem/StoryItem';
import { IHNItem } from '../../model';
import { TDispatch } from '../../store';
import { TStateObject } from '../../store/createRootReducer';
import { getItem } from '../../store/item/actions';

import "./styles/index.scss";
import Comment from '../Comment/Comment';
import { goBack } from 'connected-react-router';

const Items: React.FC = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<TDispatch>();
  useEffect((): (() => void) => {

    const controller = dispatch(getItem(id));

    return (): void => {
      controller.abort()
    }
  }, [id, dispatch]);
  const { loading, story } = useSelector<TStateObject, { story?: IHNItem | null, loading: boolean }>(state => {
    return {
      loading: state.item.loading,
      story: state.item.loading ? state.stories.stories.find(s => `${s.id}` === id) : state.item.item,
    }
  })

  return <div className="Items">
    <div className="Items_wrapper">
      {story && <StoryItem story={story} element={'div'} />}
      {loading && <p>Loading...</p>}
      {
        !loading && story && story.comments && (
          <ul>{
            story.comments.filter(comment => !(comment.dead || comment.deleted || !comment.content)).map(comment => <Comment
              key={comment.id} comment={comment} />)
          }</ul>
        )
      }
      {!loading && <button onClick={() => {
        dispatch(goBack())
      }}>Back</button>}
    </div>
  </div>
}

export default Items;