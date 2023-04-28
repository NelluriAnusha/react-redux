import * as React from 'react';
import './style.css';

export default function Show({ myClick }) {
  return (
    <div>
      <h1>Child StackBlitz!</h1>
      <button onClick={myClick}>Click</button>
    </div>
  );
}
