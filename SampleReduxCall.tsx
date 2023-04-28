import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

export default function SampleReduxCall() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>Dispatcher!</h1>
      <button onClick={() => dispatch({ type: 'ACTION_1' })}>Action 1</button>
      <p>Redux Action Dispatch : {count}</p>
    </div>
  );
}
