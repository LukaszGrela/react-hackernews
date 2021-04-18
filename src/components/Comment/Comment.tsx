import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { IHNComment } from '../../model';
import { Paths } from '../AppRouter/AppRouter';
import { pathBuilder } from '../AppRouter/utils';

import './styles/index.scss'

export interface IProps {
  comment: IHNComment;
}

const Comment: React.FC<IProps> = ({ comment }: IProps): JSX.Element => {
  const [collapsed, setCollapsed] = React.useState(false)
  return <li className="Comment">
    <div className="Comment_header light">
      <Link
        to={pathBuilder(Paths.USER, [
          { key: "id", value: comment.user },
        ])}
      >
        {comment.user}
      </Link>
      {comment.time_ago}
      <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? "[+]" : "[-]"}</button>
    </div>
    {!collapsed && <div className="Comment_comments">
      <div className="Comment_comments_body" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.content || "") }} />
      {comment.comments && comment.comments.length > 0 && <ul className="Comment_nested">
        {
          comment.comments.map(nested => <Comment key={nested.id} comment={nested} />)
        }
      </ul>}
    </div>
    }</li>
}

export default Comment;