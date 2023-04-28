import { createStore } from 'redux';

const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_1':
      return { count: state.count + 1 };
  }
};

export const store = createStore(reducer);
