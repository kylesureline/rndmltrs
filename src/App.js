import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import Form from './components/Form';
import Table from './components/Table';
import {
  CLEAR_WORDS,
} from './reducers/actions';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClear = e => {
    dispatch(CLEAR_WORDS());
  };

  const handleGenerate = e => {

  };

  return (
    <div>
      <Form state={state} dispatch={dispatch} />
      {!!state.values.length && <button onClick={handleClear}>Clear</button>}
      {!!state.values.length && <button onClick={handleGenerate}>Generate</button>}
      <Table table={state.table} />
    </div>
  );
};

export default App;
