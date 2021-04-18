import { goBack } from 'connected-react-router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { TDispatch } from '../../store';

import "./styles/index.scss";

const User: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<TDispatch>();
  return <div className="User">
    <p>Not implemented</p>
    <button onClick={() => {
      dispatch(goBack())
    }}>Back</button>
  </div>
}

export default User;