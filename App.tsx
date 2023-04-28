import * as React from 'react';
import Show from './Show';
import SampleReduxCall from './SampleReduxCall';
import './style.css';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  const [count, setCount] = React.useState(5);

  const [add, setAdd] = React.useState(0);
  const [calc, setCalc] = React.useState(0);
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setCalc(() => count * 2);
  }, [count]);

  const handleClick = (e) => {
    setAdd(() => count + count);
    setDisplay(true);
  };

  return (
    <Provider store={store}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>Add</button>
        <p>Calculation: {calc}</p>
        <Show myClick={handleClick} />
        {display ? <p>Add same Count: {calc}</p> : null}
        <SampleReduxCall />
      </div>
    </Provider>
  );
}
