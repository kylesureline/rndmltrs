import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import Form from './components/Form';
import Table from './components/Table';
import {
  GENERATE,
} from './reducers/actions';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleGenerate = e => {
    dispatch(GENERATE());
  };

  return (
    <div>
      <Form state={state} dispatch={dispatch} />
      <button onClick={handleGenerate} disabled={!state.values.length}>Generate</button>
      <Table table={state.table} fontSize={state.fontSize} />
    </div>
  );
};

export default App;
