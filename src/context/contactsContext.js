import createDataContext from './createDataContext';

const contactReducer = (state, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case 'ADD':
      return [...state, payload];
    default:
      return state;
  }
};

const addContact = dispatch => contact => {
  dispatch({ type: 'ADD', payload: contact });
};

export const { Context, Provider } = createDataContext(
  contactReducer,
  { addContact },
  [
    { id: '1', name: 'Ding Dong', pos: 'web Dev' },
    { id: '2', name: 'Ding Pong', pos: 'A Dev' },
    { id: '3', name: 'Ding Song', pos: 'V Dev' },
    { id: '4', name: 'Ding Jong', pos: 'F Dev' },
    { id: '5', name: 'Ding Zong', pos: 'B Dev' },
    { id: '6', name: 'Ding Pong', pos: 'A Dev' },
  ]
);
